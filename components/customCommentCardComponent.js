import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Card } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

export default class ReorderCardComponent extends Component {
  constructor(props) {
    super(props);
  }
  pin = () => {
    this.props.pinnedButtonPressed(this.props.index);
  };

  renderTouchableMessage = (msg) => {
    if (msg.includes('PRN')) {
      return <TouchableOpacity onPress={this.props.onDuty}>
              <Text style={styles.commentCardFontSize}>
                {this.props.message}
              </Text>
            </TouchableOpacity>
    } 
    else {
        return <Text style={styles.commentCardFontSize}>
          {this.props.message}
        </Text>
    }
  }

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
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
                color={styles.pinContainer.color}
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
            {this.renderTouchableMessage(this.props.message)}
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
