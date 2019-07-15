import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class IndividualUnit extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        const { state: { params = {} } } = navigation;
        return {
          title: params.title || 'default title',
        };
      }

    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam('id', 0)}</Text>
            </View>
        );
    }
}