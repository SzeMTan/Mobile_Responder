import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './components/home';
import Settings from './components/settings';

const TabNavigator =  createBottomTabNavigator({
  Home:Home,
  Settings:Settings
});

export default createAppContainer(TabNavigator);


