import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
// import styles from '../styles/style'
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class HeaderComponent extends Component {

    static defaultProps = {
        title: "",
        fontSize: 24,
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: this.props.title, style: styles.header }}
                    rightComponent={{text: '10/10', style: styles.headerText }}
                    // backgroundColor='#4f73be'
                    // backgroundColor='#31708E'
                    backgroundColor= '#0076FF'
                    

                />
            </View>
        );
    }
}
