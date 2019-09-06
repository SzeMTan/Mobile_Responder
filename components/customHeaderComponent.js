import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
// import styles from '../styles/style'
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

export default class HeaderComponent extends Component {

    static defaultProps = {
        title: "",
        fontSize: 24,
        filter: false 
    }

    render() {
      styles = getStyleSheet(GLOBAL.darkState);
        return (
            <View>
                {this.props.filter ? (
                  <Header
                    leftComponent={
                      <TouchableOpacity onPress={this.props.cancel}>
                        <Text style={styles.headerText}>CANCEL</Text>
                      </TouchableOpacity>
                    }
                    centerComponent={{ text: this.props.title, style: styles.header }}
                    rightComponent={
                      <TouchableOpacity onPress={this.props.done}>
                        <Text style={styles.headerText}>DONE</Text>
                      </TouchableOpacity>
                    }
                    backgroundColor="#0076FF"
                  />
                ) : (
                  <Header
                    centerComponent={{ text: this.props.title, style: styles.header }}
                    rightComponent={{ text: "10/10", style: styles.headerText }}
                    backgroundColor="#0076FF"
                  />
                )}
            </View>
        );
    }
}
