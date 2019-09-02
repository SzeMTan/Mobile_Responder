import React, { Component } from "react";
import { ScrollView, View,  StyleSheet } from 'react-native';
import {Button, Text } from 'react-native-elements';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import HeaderComponent from '../../components/customHeaderComponent';
import ButtonComponent from "../../components/customButtonComponent";
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);
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

    renderTabContent = (index) => {
        if (index === 0){
            return  <ScrollView>
                        <CardComponent title='Unit STATUS CODE: '/>
                        <CardComponent title='Unit: '
                        titlecontent={['Name: ','QID: ', 'phone no: ', 'shift start: ', 'shift end:', 'radio no: ']}/>
                    </ScrollView>
        }
        else {
            return <ScrollView>
                        <CardComponent title='Current job: '/>
                        <ButtonComponent style={ styles.endJob } title='END JOB ->' onPress={() => this.props.navigation.navigate('Login')}/>
                        <View style={styles.horizonalLine}/>
                    </ScrollView>
        }
    }

    render() {
        return (
            <View>
                <HeaderComponent title='HOME'/>
                <View>
                <SegmentControlComponent paramvalues={['UNIT', 'JOB']} 
                    tabAction={this.setIndex}
                />
                {this.renderTabContent(this.state.selectedIndex)}
                </View>
            </View>
        );
    }
}
