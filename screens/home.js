import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, Text, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import ConsumerComponent from '../components/segcomponent';
import {Card, CardImage, CardTitle, CardContent, CardButton, CardAction} from 'react-native-cards';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'HOMES', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
                <ConsumerComponent paramvalues={['UNIT', 'JOBS']}/>
                <ScrollView>
                    <Card>
                        <CardTitle
                        title="Unit Status Code: "
                        />                        
                    </Card>
                    <Card>
                        <CardTitle
                        title="Unit: "
                        />
                        <CardContent text="Name: " />
                        <CardContent text="QIDs: " />
                        <CardContent text="ph. no: " />
                        <CardContent text="Shift start: " />
                        <CardContent text="Shift end: " />
                        <CardContent text="radio no: " />
                    </Card>
                </ScrollView>
            </View>
        );
    }
}
