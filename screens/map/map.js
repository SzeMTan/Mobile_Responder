import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import { MapView, Location, Permissions } from 'expo';
// import styles from '../../styles/style'
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // jobMarkers: [
      //     {
      //       title: 'P036986219',
      //       latlng: {latitude: -36.848671,
      //         longitude: 174.770107}
      //     },
      //   {
      //     title: 'P036986218',
      //     latlng: {latitude: -36.853943,
      //       longitude: 174.768265}
      //   },
      //   {
      //     title: 'P036986217',
      //     latlng: {latitude: -36.852638,
      //       longitude: 174.768265}
      //   },
    // ],
    jobMarkers: GLOBAL.jobs,
    selectedJob: null,
    unitMarkers: [
      {
        title: 'P036986219',
        latlng: {latitude: -36.850581,
          longitude: 174.772951}
      },
    {
      title: 'P036986218',
      latlng: {latitude: -36.851958,
        longitude: 174.772524}
    },
    {
      title: 'P036986217',
      latlng: {latitude: -36.854165,
        longitude: 174.770824}
    },
],
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
        });
  }

  handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
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

   this.setState({selectedJob: this.props.navigation.getParam('latlng')})

   if ( this.state.selectedJob == null ){
   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   
   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0045 }});
   }
   else {
     this.setState({mapRegion: {latitude: this.state.selectedJob.latitude, longitude: this.state.selectedJob.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0045}})
   }
   
  };

  renderMarker(latlng) {
    if (latlng == this.state.selectedJob){
       return <Image source={require('../../assets/ios-briefcase.png')} style={[styles.marker, {tintColor: 'red'}]}/>
    }
    else {
      return <Image source={require('../../assets/ios-briefcase.png')} style={styles.marker}/>
    }
  }


  calloutPress(job) {
    this.props.navigation.navigate('IndividualJob', {id: 1, title: job.title, code: job.code, date: job.date, status: job.status, priority: job.priority, latlng: job.latlng})
    }

  //needs to use title rather than identifying by the latlng
  render() {
    return (
      <View style={styles.containerView}>
        <HeaderComponent title='MAP'/>
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
              onPress={() => this.calloutPress(marker)}
              // onPress={() => this.marker.showCallout()}
              // onCalloutPress={this.calloutPress(marker)}
            >
              {this.renderMarker(marker.latlng)}
            </MapView.Marker>
            ))}
            {this.state.unitMarkers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.latlng}
            >
              
            <Image source={require('../../assets/ios-car.png')} style={styles.marker}/>
            </MapView.Marker>
            ))}
            </MapView>
        }
        </View>
      </View>
    );
  }
}
