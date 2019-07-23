import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <Card containerStyle={{ padding: 0, marginVertical: 0 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 10,
            marginLeft: 220
          }}
          onPress={() => {
            this.handleSortChange();
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center"
            }}
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
