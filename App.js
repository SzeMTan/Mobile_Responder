import React, { Component } from 'react';
import {View } from 'react-native';
import HeaderComponent from './components/customHeaderComponent';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

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
import IndividualJob from './screens/jobs/individualJob';

import { Ionicons } from '@expo/vector-icons'; 
import ChangePasswordScreen from './screens/login/changePassword';
import GLOBAL from './global'
import getStyleSheet from './styles/style';


import CameraTestScreen from './screens/jobs/cameraScreen';
import NewFieldEvent from "./screens/jobs/newFieldEvent";
import OnDutyScreen from './screens/jobs/onDutyScreen';

const iconSize = 30;

const headerFontSize = 24;


const styles = getStyleSheet(GLOBAL.darkState);

// navigation for the settings tab
const SettingsNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        header: <HeaderComponent title='Settings'/>,
      }),
    },
    General: {
      screen: GeneralScreen,
      navigationOptions: {
        headerTitle: 'General',
        headerTitleStyle: styles.header,
        headerTintColor: 'white',
        headerStyle: styles.header,
        headerRight: (<View/>),
      }, 
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        headerTitle: 'About',
        headerTitleStyle: styles.header,
        headerTintColor: 'white',
        headerStyle: styles.header,
        headerRight: (<View/>),
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

const JobsNavigator = createStackNavigator(
  {
    Jobs: {
      screen: JobsList,
    },
    IndividualJob: {
      screen: IndividualJob,
    },
    NewFieldEvent: {
      screen: NewFieldEvent
    },
    Camera: {
      screen: CameraTestScreen,
    },
    OnDuty: {
      screen: OnDutyScreen,
    }
  },
  {
    initialRouteName: 'Jobs',
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

//for hiding tab bar when in camera screen
JobsNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index == 2) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
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
    screen: JobsNavigator,
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
const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: TabNavigator,
    Password: ChangePasswordScreen
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
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