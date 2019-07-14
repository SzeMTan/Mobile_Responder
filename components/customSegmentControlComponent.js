import SegmentedControlTab from 'react-native-segmented-control-tab'
import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';

export default class SegmentControlComponent extends Component {
 
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
      this.props.tabAction(index)
    }
 
    render() {
        return (
            <View>
                <SegmentedControlTab 
                    values={this.props.paramvalues}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    />
            </View>

        );
    }
}