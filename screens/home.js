import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { Header, Text, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import ConsumerComponent from '../components/segcomponent'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'HOME', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
                <ConsumerComponent/>
            </View>
        );
    }
}
