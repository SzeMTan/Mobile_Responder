import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/home';
import Settings from './screens/settings';
import LoginScreen from './screens/login/login';
import { Ionicons } from '@expo/vector-icons'; 

const TabNavigator =  createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={30}  />
        )
      }
    },
  Settings:{
    screen: Settings,
    navigationOptions: {
        tabBarLabel:"Settings",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" size={30}  />
        )
      }
    },
});


const RootStack = createSwitchNavigator(
  {
    Login: LoginScreen,
    Home: TabNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}