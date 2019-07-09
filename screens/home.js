import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { Header, Text, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import ConsumerComponent from '../components/segcomponent';
import {Card, CardImage, CardTitle, CardContent, CardButton, CardAction} from 'react-native-cards';
import CardComponent from '../components/cardcomponent'
export default class Home extends Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'HOMES', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
                <ConsumerComponent paramvalues={['UNIT', 'JOB']}/>
                <ScrollView>
                    <CardComponent title='Unit Status code: '/>
                    <CardComponent title='Unit: ' 
                        titlecontent={['Name: ','QID: ', 'phone no: ', 'shift start: ', 'shift end:', 'radio no: ']}/>
                </ScrollView>
                <Button
                    // buttonStyle={styles.loginButton}
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Logout"
                    />
            </View>
        );
    }
}
