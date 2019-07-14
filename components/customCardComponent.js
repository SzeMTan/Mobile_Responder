import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, Text, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Card, CardImage, CardTitle, CardContent, CardButton, CardAction } from 'react-native-cards';

export default class CardComponent extends Component {

    static defaultProps = {
        title: "",
        titlecontent: [],
    }


    render() {
        const items = this.props.titlecontent.map(st => <CardContent key={st} text={st}/>)
        return (
            <View>
                <Card>
                    <CardTitle
                        title={this.props.title}
                    />
                    {items}
                    
                        <CardAction 
      separator={true} 
      inColumn={false} style={{        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',}}>
      <CardContent
        text={this.props.leftbottom}
      />
      <CardContent
        text={this.props.rightbottom}
        style={{ flex: 1, textAlign: "right", flexDirection: 'row', justifyContent: 'flex-end'}}
      />
    </CardAction>
                </Card>
            </View>
        );
    }
}
