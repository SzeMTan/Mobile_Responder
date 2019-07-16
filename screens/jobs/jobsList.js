import React, { Component } from "react";
import { View } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';

export default class JobsList extends Component {

    render() {
        return (
            <View>
                <HeaderComponent title={'Jobs()'}/>
            </View>
        );
    }
}