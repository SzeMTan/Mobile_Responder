import React, { Component } from "react";
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

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
        styles = getStyleSheet(GLOBAL.darkState);
        return (
          <View style={styles.sliderContainer}>
            <View style={styles.sliderTitleContainer}>
                <Text numberOfLines={1} style={styles.sliderText}>{this.props.title}</Text>
                <Text numberOfLines={1} style={styles.sliderText}>{this.state.value}</Text>
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

