import React, { Component } from "react";
import ToggleSwitch from 'toggle-switch-react-native'
import { StyleSheet, View } from 'react-native';
// import styles from '../styles/style'
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class ToggleComponent extends Component {

    state = {
        // toggleState: false,
    };

    static defaultProps = {
        toggleLabel: ""
    }

    render() {
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