import React, { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import Slider from 'react-native-slider';

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
          <View style={styles.container}>
            <View style={styles.titleContainer}>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginHorizontal: '5%',
        paddingVertical: 15,
        paddingHorizontal:30
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
});