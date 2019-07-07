import SegmentedControlTab from 'react-native-segmented-control-tab'
import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import marginStyle from '../marginstyle';

export default class ConsumerComponent<props, state> extends Component {
 
  constructor(){
    super()
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
      return (
          <View style={marginStyle.componentMargin}>
              <SegmentedControlTab 
                  values={this.props.paramvalues}
                  selectedIndex={this.state.selectedIndex}
                  onTabPress={this.handleIndexChange}
                  />
          </View>
      );
  }
}