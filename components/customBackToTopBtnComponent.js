import React, { Component } from 'react';
//import react in our code.

import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import all the components we are going to use.

export default class BackToTopBtnComponent extends Component {
  clickHandler = () => {
    //function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };

  render() {
    return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          {/* <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
uri:'http://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          /> */}
          <Ionicons name="ios-arrow-up" size={30} color="#fff" />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 55,
    backgroundColor: '#202646',
    borderRadius:25,
  },

  FloatingButtonStyle: {
    width: 50,
    height: 50,
  },
});
