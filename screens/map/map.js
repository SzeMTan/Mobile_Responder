import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import { MapView, Location, Permissions } from 'expo';
import mapStyles from './style'
import styles from '../../styles/style'

export default class App extends Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
  };

  componentDidMount() {
    this.getLocationAsync();
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

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   
   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
  };

  render() {
    return (
      <View style={styles.containerView}>
        {/* <Text style={mapStyles.paragraph}>
          Map
        </Text> */}
        <HeaderComponent title='MAP'/>
        <View style={mapStyles.container}>
        {
          this.state.locationResult === null ?
          <Text>Finding your current location...</Text> :
          this.state.hasLocationPermissions === false ?
            <Text>Location permissions are not granted.</Text> :
            this.state.mapRegion === null ?
            <Text>Map region doesn't exist.</Text> :
            <MapView
              style={mapStyles.map}
              region={this.state.mapRegion}
              showsUserLocation={true}
            />
        }
        </View>
        
        <Text>
          Location: {this.state.locationResult}
        </Text>
      </View>
        
    );
  }
}
