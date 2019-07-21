import React, { Component } from "react";
import ToggleSwitch from 'toggle-switch-react-native'
import { StyleSheet, View } from 'react-native';
import styles from '../styles/style'

export default class ToggleComponent extends Component {

    state = {
        toggleState: false,
    };

    static defaultProps = {
        toggleLabel: ""
    }

    render() {
        return (
            <View>
                <ToggleSwitch
                    isOn={this.state.toggleState}
                    onColor='#30d158'
                    label={this.props.toggleLabel}
                    // labelStyle = {style=styles.toggleSwitchContainer}
                    labelStyle={styles.toggleSwitchContainer}
                    size='medium'
                    onToggle={ toggleState => {
                        this.setState({ toggleState })
                    }}  
                /> 
                </View>
        )
    }
}