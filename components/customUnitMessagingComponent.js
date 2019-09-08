import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import GLOBAL from "../global";
import getStyleSheet from "../styles/style";
import { getFormattedDate } from "../helpers";

export default class UnitMessagingComponent extends React.Component {
  state = {
    messages: []
  };

  componentWillMount() {
    formattedDate = getFormattedDate("");
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello World",
          createdAt: formattedDate,
          user: {
            _id: 2,
            name: "PBY"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    return (
      <View style={styles.containerView}>
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView
            style={[styles.containerView, styles.appbackground]}
            behavior="padding"
            keyboardVerticalOffset={115}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.containerView}>
                <GiftedChat
                  messages={this.state.messages}
                  onSend={messages => this.onSend(messages)}
                  user={{
                    _id: 1
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        ) : (
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1
            }}
            bottomOffset={80}
          />
        )}
      </View>
    );
  }
}
