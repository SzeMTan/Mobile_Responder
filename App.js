import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/home';
import Settings from './screens/settings';
import LoginScreen from './screens/login';

const TabNavigator =  createBottomTabNavigator({
  Home:Home,
  Settings:Settings
});

// const tabbar = createAppContainer(TabNavigator);
// export default tabbar;


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