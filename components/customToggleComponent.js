import React, { Component } from "react";
import ToggleSwitch from 'toggle-switch-react-native'
import { View } from 'react-native';
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

export default class ToggleComponent extends Component {

    static defaultProps = {
        toggleLabel: ""
    }

    render() {
        styles = getStyleSheet(GLOBAL.darkState);
        const { onToggle, toggleState, toggleLabel } = this.props;
        return (
            <View>
                <ToggleSwitch
                    isOn={toggleState}
                    onColor='#30d158'
                    label={toggleLabel}
                    labelStyle={styles.toggleSwitchContainer}
                    size='medium'
                    onToggle={onToggle}
                /> 
                </View>
        )
    }
}