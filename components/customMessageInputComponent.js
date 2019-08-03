import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";

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
    })
    Keyboard.dismiss()
  };

  render() {
    return (
      <View style={{ flexDirection: "row", padding: 0, margin: 0 }}>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            marginLeft: 10,
            // backgroundColor: "red"
          }}
          onPress={() => {
            console.log("camera");
            this.props.cameraPressed();
          }}
        >
          <Ionicons name="ios-camera" size={40} />
        </TouchableOpacity>
        <View>
          <TextInput
            {...this.props}
            onChangeText={text => {
              this.setState({ text });
            }}
            onContentSizeChange={event => {
              this.setState({ height: event.nativeEvent.contentSize.height });
            }}
            value={this.state.text}
            style={[
              styles.loginFormTextInput,
              {
                borderColor: this.state.isFocused
                  ? "#0a84ff"
                  : "rgba(255,255,255,0)"
              },
              { height: Math.max(35, this.state.height) },
              { width: 250 }
            ]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder={this.props.placeholderText}
            placeholderTextColor="#c4c3cb"
            enablesReturnKeyAutomatically={true}
            multiline={true}
            numberOfLines={3}
            //   returnKeyType="send"
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
    );
  }
}

const styles = StyleSheet.create({
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: '#eaeaea',
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  },
  commentButton: {
    color: "#0084ff",
    fontWeight: "600",
    fontSize: 17,
    backgroundColor: "transparent",
    marginTop: 10,
    marginBottom: 5
  }
});
