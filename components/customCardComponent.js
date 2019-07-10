import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, Text, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Card, CardImage, CardTitle, CardContent, CardButton, CardAction } from 'react-native-cards';
import marginStyle from "../marginstyle";

export default class CardComponent extends Component {

    static defaultProps = {
        title: "",
        titlecontent: [],
    }


    render() {
        const items = this.props.titlecontent.map(st => <CardContent key={st} text={st}/>)
        return (
            <View style={marginStyle.componentMargin}>
                <Card>
                    <CardTitle
                        title={this.props.title}
                    />
                    {items}
                </Card>
            </View>
        );
    }
}
