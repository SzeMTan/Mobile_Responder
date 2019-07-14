import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import HeaderComponent from './components/customHeaderComponent';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Home from './screens/home/home';
import LoginScreen from './screens/login/login';

import AboutScreen from './screens/settings/about';
import GeneralScreen from './screens/settings/general';
import SettingsScreen from './screens/settings/settings';

import Map from './screens/map/map';
import Units from './screens/units/units';

import { Ionicons } from '@expo/vector-icons'; 
import ChangePasswordScreen from './screens/login/changePassword';
import styles from './styles/style'

const iconSize = 30;

const headerFontSize = 24;
const SettingsNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        header: <HeaderComponent title='Settings'/>
      }),
    },
    General: {
      screen: GeneralScreen,
      navigationOptions: {
        headerTitle: 'General',
        headerTitleStyle: styles.header,
        headerRight: (<View />),
      }, 
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        headerTitle: 'About',
        headerTitleStyle: styles.header,
        headerRight: (<View />),
      },    
    },
  },
  {
    initialRouteName: 'Settings',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0, //for android
        shadowOpacity: 0, //for ios
        borderBottomWidth: 0, //for ios
      },
    },
  }
);


const TabNavigator =  createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={iconSize}  />
        )
      }
    },
  Settings:{
    screen: SettingsNavigator,
    navigationOptions: {
        tabBarLabel:"Settings",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" size={iconSize}  />
        )
      }
    },

    Map:{
      screen: Map,
      navigationOptions: {
          tabBarLabel:"Map",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-map" size={iconSize}  />
          )
        }
      },
  Units:{
    screen: Units,
    navigationOptions: {
        tabBarLabel:"Units",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-car" size={iconSize}  />
        )
      }
    },
},  
{
  order: ["Units", "Home", "Map", "Settings"],
  initialRouteName: "Home",
  resetOnBlur:true
});


const RootStack = createSwitchNavigator(
  {
    Login: LoginScreen,
    Home: TabNavigator,
    Password: ChangePasswordScreen
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}