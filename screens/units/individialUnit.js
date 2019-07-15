import React, { Component } from "react";
import { View, Text } from 'react-native';
import styles from '../../styles/style';

export default class IndividualUnit extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        const { state: { params = {} } } = navigation;
        return {
          title: params.title || 'default title',
          headerTitleStyle: styles.header,
          headerRight: (<View />),
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