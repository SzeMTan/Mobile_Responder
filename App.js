import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import HeaderComponent from './components/customHeaderComponent';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import CardStackStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'
import Home from './screens/home/home';
import LoginScreen from './screens/login/login';

import AboutScreen from './screens/settings/about';
import GeneralScreen from './screens/settings/general';
import SettingsScreen from './screens/settings/settings';

import Map from './screens/map/map';
import UnitsList from './screens/units/unitsList';
import IndividualUnit from './screens/units/individialUnit';

import JobsList from './screens/jobs/jobsList';

import { Ionicons } from '@expo/vector-icons'; 
import ChangePasswordScreen from './screens/login/changePassword';
import styles from './styles/style';

const iconSize = 30;

const headerFontSize = 24;

// navigation for the settings tab
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
    headerLayoutPreset: 'center',
    // horizontal slide transition
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        return CardStackStyleInterpolator.forHorizontal(sceneProps);
      }
    }),
  }
);

const UnitsNavigator = createStackNavigator(
  {
    Units: {
      screen: UnitsList,
    },
    IndividualUnit: {
      screen: IndividualUnit,
    },
  },
  {
    initialRouteName: 'Units',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0, //for android
        shadowOpacity: 0, //for ios
        borderBottomWidth: 0, //for ios
      },
    },
    headerLayoutPreset: 'center',
    // horizontal slide transition
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        return CardStackStyleInterpolator.forHorizontal(sceneProps);
      }
    }),
  }
);

// main bottom tab navigator
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
    screen: UnitsNavigator,
    navigationOptions: {
        tabBarLabel:"Units",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-car" size={iconSize}  />
        )
      }
    },
  Jobs:{
    screen: JobsList,
    navigationOptions:{
      tabBarLabel:"Jobs",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-briefcase" size={iconSize}  />
        )
    }
  },
},  
{
  order: ["Jobs", "Units", "Home", "Map", "Settings"],
  initialRouteName: "Home",
  resetOnBlur:true
});

// login to home navigation
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