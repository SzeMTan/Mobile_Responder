import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/home';
import Settings from './screens/settings';
import LoginScreen from './screens/login';

const TabNavigator =  createBottomTabNavigator({
  Home:Home,
  Settings:Settings,
  Login: LoginScreen
});

const tabbar = createAppContainer(TabNavigator);
export default tabbar;


