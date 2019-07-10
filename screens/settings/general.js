import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button} from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import ToggleComponent from '../../components/toggleComponent';
import SliderComponent from '../../components/SliderComponent';

export default class GeneralScreen extends Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'General Settings', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
                <ToggleComponent toggleLabel='Enable Dark Theme'/>
                <ToggleComponent toggleLabel='Enable Text-to-Speech'/>
                <SliderComponent title={'Notifications(mins)'} min={0} max={10}/>
            </View>
        );
    }
}