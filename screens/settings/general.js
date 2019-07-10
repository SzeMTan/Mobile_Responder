import React, { Component } from "react";
import { View } from 'react-native';
import { Header} from 'react-native-elements';
import ToggleComponent from '../../components/customToggleComponent';
import SliderComponent from '../../components/customSliderComponent';

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