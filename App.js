import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, BottomTabBar } from 'react-navigation';

import Home from './screens/home';
import Settings from './screens/settings';
import LoginScreen from './screens/login/login';

import AboutScreen from './screens/about';
import GeneralScreen from './screens/general';
import SettingsScreen from './screens/settingsScreen';

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
},  
{
  navigationOptions: ({ navigation }) => ({
    tabBarOnPress: (scene, jumpToIndex) => {
      console.log('onPress:', scene.route);
      jumpToIndex(scene.index);
    },
  }),
});

// const StacksInTabs = TabNavigator(
//   {
//     MainTab: {
//       screen: MainTab,
//     },
//     SettingsTab: {
//       screen: SettingsTab,
//     },
//   },
//   {
//     tabBarComponent: ({ jumpToIndex, ...props }) => (
//       <TabView.TabBarBottom
//         {...props}
//         jumpToIndex={index => {
//           if (currentIndex === index && index === 0) {
//             let resetTabAction = NavigationActions.navigate({
//               routeName: "MainTab",
//               action: NavigationActions.reset({
//                 index: 0,
//                 actions: [NavigationActions.navigate({ routeName: "Home" })],
//               }),
//             });
//             props.navigation.dispatch(resetTabAction);
//           } else {
//             currentIndex = index;
//             jumpToIndex(index);
//           }
//         }}
//       />
//     ),
//   }
// );


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