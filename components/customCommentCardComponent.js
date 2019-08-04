import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Card } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/style";

export default class ReorderCardComponent extends Component {
  constructor(props) {
    super(props);
  }
  pin = () => {
    this.props.pinnedButtonPressed(this.props.index);
  };
  render() {
    const { message } = this.props;
    return (
      <Card containerStyle={styles.commentCardTopLevelContainer}>
        <View style={styles.commentCardContainer}>
          <View style={styles.commentCardAuthorContainer}>
            <Text style={styles.commentCardAuthorText}>
              {this.props.sender}
            </Text>
          </View>
          <View style={styles.pinContainer}>
            <TouchableOpacity style={styles.containerView} onPress={this.pin}>
              <MaterialCommunityIcons
                name={this.props.pinned ? "pin" : "pin-outline"}
                color="black"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.props.uri
          ? <View style={styles.commentCardImageTopLevel}>
              <View
                style={styles.commentCardImageSecondaryLevel}
              >
                <Image
                  style={styles.commentCardImageThirdLevel}
                  source={{ uri: message }}
                />
              </View>
            </View>
          : <View style={styles.commentCardFontContainer}>
              <Text style={styles.commentCardFontSize}>
                {this.props.message}
              </Text>
            </View>}
        <View style={styles.commentCardDateContainer}>
          <Text style={styles.commentCardDate}>
            {this.props.date}
          </Text>
        </View>
      </Card>
    );
  }
}
