import React, { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import Slider from 'react-native-slider';
// import styles from '../styles/style'
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class SliderComponent extends Component {
    state = {
        value: 0
    };
    
    static defaultProps = {
        title: "",
        max: 0,
        min: 1
    }
      render() {
        return (
          <View style={styles.sliderContainer}>
            <View style={styles.sliderTitleContainer}>
                <Text numberOfLines={1}>{this.props.title}</Text>
                <Text numberOfLines={1}>{this.state.value}</Text>
            </View>
            <Slider
              value={this.state.value}
              onValueChange={value => this.setState({ value })}
              minimumValue={this.props.min}
              maximumValue={this.props.max}
              step={1}
            />
          </View>
        );
      }
}

