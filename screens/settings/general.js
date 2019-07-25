import React, { Component } from "react";
import { View, Alert } from 'react-native';
import ToggleComponent from '../../components/customToggleComponent';
import SliderComponent from '../../components/customSliderComponent';
import SettingsList from 'react-native-settings-list';

export default class GeneralScreen extends Component {
    render() {
        return (
            <View>
                <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                    <SettingsList.Item 
                    title='Enable Dark Theme'
                    switchOnValueChange={() => Alert.alert('Route To General Page')}
                    hasSwitch={true}
                    hasNavArrow={false}
                    />
                    <SettingsList.Item 
                    title='Enable Text-to-Speech'
                    switchOnValueChange={() => Alert.alert('Route To General Page')}
                    hasSwitch={true}
                    hasNavArrow={false}
                    />
                    </SettingsList>
                <SliderComponent title={'Notifications(mins)'} min={0} max={10}/>
            </View>
        );
    }
}