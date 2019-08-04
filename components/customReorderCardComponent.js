import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/style"
export default class ReorderCardComponent extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      context: [
        { text: "OLDEST-NEWEST", iconName: "calendar-import" },
        { text: "NEWEST-OLDEST", iconName: "calendar-export" }
      ]
    };
  }

  handleSortChange = () => {
    this.setState({
      ...this.state,
      selectedIndex: this.state.selectedIndex ? 0 : 1
    });
    this.props.func();
  };

  render() {
    return (
      <Card containerStyle={styles.reorderCardContainer}>
        <TouchableOpacity
          style={styles.reorderCardTouch}
          onPress={() => {
            this.handleSortChange();
          }}
        >
          <View
            style={styles.reorderCardRotation}
          >
            <MaterialCommunityIcons
              name={this.state.context[this.state.selectedIndex].iconName}
              size={20}
            />
            <Text>
              {this.state.context[this.state.selectedIndex].text}{" "}
            </Text>
          </View>
        </TouchableOpacity>
      </Card>
    );
  }
}
