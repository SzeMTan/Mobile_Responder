import React, { Component } from "react";
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class MAP extends Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'MAP', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
            </View>
        );
    }
}
