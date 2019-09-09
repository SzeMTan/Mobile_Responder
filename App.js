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
import JobFilter from "./screens/jobs/jobFilter";

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: Failed prop type: Invalid prop `children` supplied to `Card`.']);

const iconSize = 30;

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
        // headerTitleStyle: styles.header,
        // headerTintColor: styles.headerText.color,
        // headerStyle: styles.header,
        headerRight: (<View/>),
      }, 
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        headerTitle: 'About',
        headerTitleStyle: styles.header,
        headerTintColor: styles.headerText.color,
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

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    IndividualJob: {
      screen: IndividualJob,
    },
    Camera: {
      screen: CameraTestScreen,
    },
    OnDuty: {
      screen: OnDutyScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
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
    },
    JobFilter: {
      screen: JobFilter
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
  for (i = 0; i < navigation.state.routes.length; i++) {
    if (
      navigation.state.routes[i].routeName == "OnDutyScreen" ||
      navigation.state.routes[i].routeName == "NewFieldEvent" ||
      navigation.state.routes[i].routeName == "JobFilter" ||
      navigation.state.routes[i].routeName == "Camera"
    ) {
      tabBarVisible = false;
    }
  }

  return {
    tabBarVisible,
  };
};

// main bottom tab navigator
const TabNavigator =  createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={iconSize} color={tintColor} />
        )
      }
    },
  Settings:{
    screen: SettingsNavigator,
    navigationOptions: {
        tabBarLabel:"Settings",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" size={iconSize} color={tintColor}  />
        )
      }
    },

    Map:{
      screen: Map,
      navigationOptions: {
          tabBarLabel:"Map",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-map" size={iconSize} color={tintColor} />
          )
        }
      },
  Units:{
    screen: UnitsNavigator,
    navigationOptions: {
        tabBarLabel:"Units",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-car" size={iconSize} color={tintColor} />
        )
      }
    },
  Jobs:{
    screen: JobsNavigator,
    navigationOptions:{
      tabBarLabel:"Jobs",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-briefcase" size={iconSize} color={tintColor} />
        )
    }
  },
},  
{
  order: ["Jobs", "Units", "Home", "Map", "Settings"],
  initialRouteName: "Home",
  resetOnBlur:true,
  tabBarOptions: {
    inactiveBackgroundColor: styles.tabStyles.backgroundColor,
    inactiveTintColor: styles.tabStyles.color,
  }
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