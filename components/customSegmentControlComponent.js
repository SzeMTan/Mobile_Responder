import SegmentedControlTab from 'react-native-segmented-control-tab'
import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
// import styles from '../styles/style'
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

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
      styles = getStyleSheet(GLOBAL.darkState);
        return (
            <View>
                <SegmentedControlTab 
                    values={this.props.paramvalues}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    tabsContainerStyle={styles.segmentedControlTab}
                    />
            </View>

        );
    }
}