import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './screens/home/home';
import LoginScreen from './screens/login/login';

import AboutScreen from './screens/settings/about';
import GeneralScreen from './screens/settings/general';
import SettingsScreen from './screens/settings/settingsScreen';

import Map from './screens/map/map'
import { Ionicons } from '@expo/vector-icons'; 
import ChangePasswordScreen from './screens/login/changePassword';

const SettingsNavigator = createSwitchNavigator(
  {
    Settings: SettingsScreen,
    General: GeneralScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Settings',
  }
);


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
    screen: SettingsNavigator,
    navigationOptions: {
        tabBarLabel:"Settings",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" size={30}  />
        )
      }
    },

    Map:{
      screen: Map,
      navigationOptions: {
          tabBarLabel:"Map ",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-map" size={30}  />
          )
        }
      },
},  
{
  order: ["Home", "Map", "Settings"],
  initialRouteName: "Home",
  navigationOptions: ({ navigation }) => ({
    tabBarOnPress: (scene, jumpToIndex) => {
      console.log('onPress:', scene.route);
      jumpToIndex(scene.index);
    },
  }),
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