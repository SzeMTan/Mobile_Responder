import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    return (
      <View style={styles.appbackground}>
        <TouchableOpacity
          style={styles.titleRow}
          onPress={() => this.toggleExpand()}
        >
          {this.state.expanded ? (
            <MaterialIcons name="expand-less" size={40} color={styles.header.color}/>
          ) : (
            <MaterialIcons name="expand-more" size={40} color={styles.header.color}/>
          )}

          {this.props.title()}
        </TouchableOpacity>
        {this.state.expanded && (
          <View style={styles.accordionContentRow}>{this.props.content()}</View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}

