import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Accordion extends React.Component {
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
          <View style={styles.contentRow}>{this.props.content()}</View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F8F8F8"
  },
  contentRow: {
    paddingHorizontal: 15
  }
});
