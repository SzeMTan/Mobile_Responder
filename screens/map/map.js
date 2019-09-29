import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import { Location, Permissions } from 'expo';
import  MapView  from 'react-native-maps';
import GLOBAL from '../../global';
import getStyleSheet from '../../styles/style'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    jobMarkers: GLOBAL.jobs,
    selectedObject: null,
    unitMarkers: GLOBAL.units
  };
  }

  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
  };

  componentDidMount() {
    const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            this.getLocationAsync();
            styles = getStyleSheet(GLOBAL.darkState);
            this.forceUpdate() 
        });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }

   this.setState({selectedObject: this.props.navigation.getParam('latlng')})

   if ( this.state.selectedObject == null ){
   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   
   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0045 }});
   }
   else {
     this.setState({mapRegion: {latitude: this.state.selectedObject.latitude, longitude: this.state.selectedObject.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0045}})
   }
   
  };

  renderJobMarker(latlng) {
    if (latlng == this.state.selectedObject){
       return <Image source={require('../../assets/ios-briefcase.png')} style={[styles.marker, {tintColor: 'red'}]}/>
    }
    else {
      return <Image source={require('../../assets/ios-briefcase.png')} style={styles.marker}/>
    }
  }

  renderUnitMarker(latlng) {
    if (latlng == this.state.selectedObject){
       return <Image source={require('../../assets/ios-car.png')} style={[styles.marker, {tintColor: 'red'}]}/>
    }
    else {
      return <Image source={require('../../assets/ios-car.png')} style={styles.marker}/>
    }
  }


  calloutJobPress(job) {
    this.props.navigation.navigate('IndividualJob', {id: 1, title: job.title, code: job.code, date: job.date, status: job.status, priority: job.priority, latlng: job.latlng})
    }

  calloutUnitPress(unit) {
    this.props.navigation.navigate('IndividualUnit', {id: 1, title: unit.title, latlng: unit.latlng})
  }

  //needs to use title rather than identifying by the latlng
  render() {
    return (
      <View style={styles.containerView}>
        <HeaderComponent title='Map'/>
        <View style={styles.mapContainer}>
        {
          this.state.locationResult === null ?
          <Text>Finding your current location...</Text> :
          this.state.hasLocationPermissions === false ?
            <Text>Location permissions are not granted.</Text> :
            this.state.mapRegion === null ?
            <Text>Map region doesn't exist.</Text> :
            <MapView
              style={styles.map}
              region={this.state.mapRegion}
              showsUserLocation={true}
            >
            {this.state.jobMarkers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.latlng}
              ref={marker => (this.marker = marker)}
              onPress={() => this.calloutJobPress(marker)}
            >
              {this.renderJobMarker(marker.latlng)}
            </MapView.Marker>
            ))}
            {this.state.unitMarkers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.latlng}
              ref={marker => (this.marker = marker)}
              onPress={() => this.calloutUnitPress(marker)}
            >
              {this.renderUnitMarker(marker.latlng)}
            </MapView.Marker>
            ))}
            </MapView>
        }
        </View>
      </View>
    );
  }
}
