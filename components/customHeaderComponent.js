import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import styles from '../styles/style'

export default class HeaderComponent extends Component {

    static defaultProps = {
        title: "",
        fontSize: 24,
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: this.props.title, style: { fontSize:this.props.fontSize } }}
                    rightComponent={{text: '10/10'}}
                    // backgroundColor='none'
                    backgroundColor='#31708E'
                />
            </View>
        );
    }
}
