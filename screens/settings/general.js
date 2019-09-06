import React, { Component } from "react";
import { View, Alert } from 'react-native';
import ToggleComponent from '../../components/customToggleComponent';
import SliderComponent from '../../components/customSliderComponent';
import SettingsList from 'react-native-settings-list';
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'   

export default class GeneralScreen extends Component {

    constructor(){
        super();
        styles = getStyleSheet(GLOBAL.darkState)
        this.state = {switchValue: GLOBAL.darkState, backgroundColor: styles.appbackground};
        this.onValueChange = this.onValueChange.bind(this);
      }

    render() {
        return (
            <View style={ this.state.backgroundColor}>
                <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                </SettingsList>
                    <ToggleComponent toggleLabel='Enable Dark Theme' onToggle={() => this.onValueChange()} toggleState={GLOBAL.darkState}/>
                <SliderComponent title={'Notifications(mins)'} min={0} max={10}/>
            </View>
        );
    }


    onValueChange(value){
        this.setState({switchValue: value});
        const currentState = GLOBAL.darkState;
        GLOBAL.darkState = !currentState;
        this.setState({backgroundColor: getStyleSheet(GLOBAL.darkState).appbackground})
      }
}