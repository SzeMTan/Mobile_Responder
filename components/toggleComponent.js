import React, { Component } from "react";
import ToggleSwitch from 'toggle-switch-react-native'
import { StyleSheet, View } from 'react-native';

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
                    labelStyle = {style=styles.container}
                    size='medium'
                    onToggle={ toggleState => {
                        this.setState({ toggleState })
                    }}  
                /> 
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginHorizontal: '5%',
        paddingVertical: 15,
        paddingHorizontal:30
    },
});