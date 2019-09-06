import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

export default class Accordion extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      styles = getStyleSheet(GLOBAL.darkState);
      this.forceUpdate()
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.titleRow}
          onPress={() => this.toggleExpand()}
        >
          {this.state.expanded ? (
            <MaterialIcons name="expand-less" size={40} />
          ) : (
            <MaterialIcons name="expand-more" size={40} />
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

