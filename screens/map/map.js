import React, { Component } from "react";
import { View } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';

export default class Map extends Component {
    render() {
        return (
            <View>
                <HeaderComponent title='Map'/>
            </View>
        );
    }
}
