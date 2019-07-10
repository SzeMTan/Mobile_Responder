import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { Header, Text, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import ConsumerComponent from '../components/segcomponent';
import {Card, CardImage, CardTitle, CardContent, CardButton, CardAction} from 'react-native-cards';
import CardComponent from '../components/cardcomponent'
export default class Home extends Component {
    constructor(){
        super()
        this.state = {
          selectedIndex:0
        };
      }

    setIndex = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
          });
    }

    renderTabContent(index){
        if (index === 0){
            return  <ScrollView>
                        <CardComponent title='Unit STATUS CODE: '/>
                        <CardComponent title='Unit: '/>
                    </ScrollView>
        }
        else {
            return <Text> Tab two </Text>
        }
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'HOMES', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
                <View>
                <ConsumerComponent paramvalues={['UNIT', 'JOB']} 
                    tabAction={this.setIndex}
                />
                {this.renderTabContent(this.state.selectedIndex)}
                </View>
                <Button
                    // buttonStyle={styles.loginButton}
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Logout"
                    />
            </View>
        );
    }


}
