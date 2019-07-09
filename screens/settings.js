import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button} from 'react-native-elements';
import SettingsScreen from './settingsScreen';
import AboutScreen from './about';
import GeneralSettings from './general';
import { NavigationActions, createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

const RootStack = createSwitchNavigator(
    {
      Settings: SettingsScreen,
      About: AboutScreen,
      General: GeneralSettings,
    },
    {
      // initialRouteName: 'Settings',
      // headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      },
    },
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class Settings extends React.Component {
    render() {
      return (
          <AppContainer />
      );
    }
  }

  
//   const resetAction = NavigationActions.reset({
//     index: 1,
//     actions: [NavigationActions.navigate({ routeName: 'Settings' })],
// });
// this.props.navigation.dispatch(resetAction);