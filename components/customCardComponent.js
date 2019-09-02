import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, Text, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Card, CardImage, CardTitle, CardContent, CardButton, CardAction } from 'react-native-cards';
// import styles from '../styles/style'
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class CardComponent extends Component {

    static defaultProps = {
        title: "",
        titlecontent: [],
    }


    render() {
        const items = this.props.titlecontent.map(st => <CardContent key={st} text={st}/>)
        return (
            <View>
                <Card style={styles.card}>
                    <CardTitle
                        title={this.props.title}
                    />
                    {items}
                    
                    <CardAction 
                      separator={true} 
                      inColumn={false} 
                      style={styles.cardAction}>
                      <CardContent
                        text={this.props.leftbottom}
                      />
                      <CardContent
                        text={this.props.rightbottom}
                        style={styles.cardContent}
                      />
                    </CardAction>
                </Card>
            </View>
        );
    }
}
