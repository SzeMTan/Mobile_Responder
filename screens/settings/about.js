import React, { Component } from "react";
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class AboutScreen extends Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'ABOUT', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
            </View>
        );
    }
}