import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GLOBAL from "../global";
import getStyleSheet from "../styles/style";

export default class MessagingInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      text: "",
      height: 0
    };
  }

  static defaultProps = {
    placeholderText: "Write a Comment"
  };

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  commentButtonPressed = () => {
    this.props.postMessage(this.state.text);
    this.setState({
      ...this.state,
      text: ""
    });
    Keyboard.dismiss();
  };

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={120}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.messageInputContainer}>
            <TouchableOpacity
              style={styles.cameraTouch}
              onPress={() => {
                this.props.cameraPressed();
              }}
            >
              <Ionicons
                name="ios-camera"
                size={40}
                color={styles.accordianText.color}
              />
            </TouchableOpacity>
            <View>
              <TextInput
                {...this.props}
                onChangeText={text => {
                  this.setState({ text });
                }}
                onContentSizeChange={event => {
                  this.setState({
                    height: event.nativeEvent.contentSize.height
                  });
                }}
                value={this.state.text}
                style={[
                  styles.messagingTextInput,
                  {
                    borderColor: this.state.isFocused
                      ? "#0a84ff"
                      : "rgba(255,255,255,0)"
                  },
                  { height: Math.max(35, this.state.height) },
                  { width: Dimensions.get("window").width - 110 - 2 * 8 * 1.5 }
                ]}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder={this.props.placeholderText}
                placeholderTextColor="#c4c3cb"
                enablesReturnKeyAutomatically={true}
                multiline={true}
                numberOfLines={3}
                spellCheck={true}
              />
            </View>
            <View>
              <Text
                style={styles.commentButton}
                onPress={this.commentButtonPressed}
              >
                Comment
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
