import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button} from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class AboutScreen extends Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'ABOUT', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
            </View>
        );
    }
}