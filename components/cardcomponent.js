import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, Text, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import ConsumerComponent from '../components/segcomponent';
import {Card, CardImage, CardTitle, CardContent, CardButton, CardAction} from 'react-native-cards';

export default class CardComponent extends Component {
    render() {
        return (
            <View>
                    <Card>
                        <CardTitle
                        title={this.props.title}
                        />                        
                    </Card>
            </View>
        );
    }
}
