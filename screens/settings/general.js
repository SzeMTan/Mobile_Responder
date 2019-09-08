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
        this.state = {backgroundColor: styles.appbackground, switchValue: GLOBAL.darkState};
        this.onValueChange = this.onValueChange.bind(this);
      }

      componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            styles = getStyleSheet(GLOBAL.darkState);
          this.forceUpdate()
        });
      }
    
      componentWillUnmount() {
        // Remove the event listener
        this.focusListener.remove();
      }

    render() {
        return (
            <View style={[styles.appbackground,styles.containerView]}>
                <ToggleComponent toggleLabel='Enable Dark Theme' onToggle={() => this.onValueChange()} toggleState={GLOBAL.darkState}/>
                <SliderComponent title={'Notifications(mins)'} min={0} max={10}/>
            </View>
        );
    }


    onValueChange(value){
        this.setState({switchValue: value});
        const currentState = GLOBAL.darkState;
        GLOBAL.darkState = !currentState;
        styles = getStyleSheet(GLOBAL.darkState);
        this.setState({backgroundColor: getStyleSheet(GLOBAL.darkState).appbackground})
      }
}