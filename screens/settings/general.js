import React, { Component } from "react";
import { View, Alert } from 'react-native';
import ToggleComponent from '../../components/customToggleComponent';
import SliderComponent from '../../components/customSliderComponent';
import SettingsList from 'react-native-settings-list';
import GLOBAL from '../../global'

export default class GeneralScreen extends Component {
    constructor(){
        super();
        this.state = {switchValue: GLOBAL.darkState};
        this.onValueChange = this.onValueChange.bind(this);
      }

    render() {
        return (
            <View>
                <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                    {/* <SettingsList.Item 
                    title='Enable Dark Theme'
                    switchOnValueChange={this.onValueChange}
                    switchState={this.state.switchValue}
                    hasSwitch={true}
                    hasNavArrow={false}
                    />
                    <SettingsList.Item 
                    title='Enable Text-to-Speech'
                    switchOnValueChange={() => Alert.alert('Route To General Page')}
                    hasSwitch={true}
                    hasNavArrow={false}
                    /> */}
                </SettingsList>
                    <ToggleComponent toggleLabel='Enable Dark Theme' onToggle={() => this.onValueChange()} toggleState={GLOBAL.darkState}/>
                <SliderComponent title={'Notifications(mins)'} min={0} max={10}/>
            </View>
        );
    }


    onValueChange(value){
        this.setState({switchValue: value});
        const currentState = GLOBAL.darkState;
        console.log(currentState + ' hi')
        GLOBAL.darkState = !currentState;
        console.log(GLOBAL.darkState)
        // this.forceUpdate();
      }
}