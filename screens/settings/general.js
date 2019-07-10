import React, { Component } from "react";
import { View } from 'react-native';
import ToggleComponent from '../../components/customToggleComponent';
import SliderComponent from '../../components/customSliderComponent';
import HeaderComponent from '../../components/customHeaderComponent';

export default class GeneralScreen extends Component {
    render() {
        return (
            <View>
                <HeaderComponent title='General'/>

                <ToggleComponent toggleLabel='Enable Dark Theme'/>
                <ToggleComponent toggleLabel='Enable Text-to-Speech'/>
                <SliderComponent title={'Notifications(mins)'} min={0} max={10}/>
            </View>
        );
    }
}