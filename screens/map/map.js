import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
// import MapView from 'react-native-maps'
import MapView from 'react-native-maps'

export default class Map extends Component {
//     render() {
//         return (
//             <View>
//                 <HeaderComponent title='Map'/>
//             </View>
//         );
//     }
// }

state = {
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    location: null
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  getUserLocation= () => {
    navigator.geolocation.getCurrentPosition(
        position => {
          const location = JSON.stringify(position);
      
          this.setState({ location });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <HeaderComponent title='Map'/>
            <MapView
            style={styles.map}
            showsUserLocation={true}
            region={this.state.mapRegion}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });