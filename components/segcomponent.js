import SegmentedControlTab from 'react-native-segmented-control-tab'
import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';

export default class ConsumerComponent extends Component {
 
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
            <View style={styles.container}>
                <SegmentedControlTab 
                    values={['UNIT', 'JOB']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
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
    },
});