import React from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/AntDesign";
import HeaderComponent from "../../components/customHeaderComponent";

import ReorderCardComponent from "../../components/customReorderCardComponent";
import CommentCardComponent from "../../components/customCommentCardComponent";
import TextInputComponent from "../../components/customTextInputComponent";
import MessageInputComponent from "../../components/customMessageInputComponent";

export default class CommentTestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      sender: "d0710013",
      messages: [
        {
          sender: "PBY",
          message: "CALL FOR WINDOW",
          date: "17/03/19 2:16PM",
          uri: false,
          pinned: false
        },
        {
          sender: "ACY3",
          message: "POS WAS ON THE MOVE",
          uri: false,
          pinned: false,
          date: "17/03/19 3:00PM"
        },
        {
          sender: "d0710013",
          message: "YOUNG MALE ASKING FOR POLICE PRN: 765846",
          uri: false,
          pinned: false,
          date: "17/03/19 5:00PM"
        }
      ]
    };
  }

  pinnedButtonPressed = index => {
    this.state.messages[index].pinned = !this.state.messages[index].pinned
    this.setState({
      ...this.state,
    })
  };

  reorder = () => {
    this.setState({
      ...this.state,
      messages: this.state.messages.slice(0).reverse()
    });
  };

  render() {
    if (this.props.uri != "") {
      this.state.messages.push({
        sender: this.state.sender,
        message: this.props.uri,
        uri: true,
        pinned: false,
        date: new Date().toLocaleString()
      });
    }
    
    if (this.props.message != "") {
      this.state.messages.push({
        sender: this.state.sender,
        message: this.props.message,
        uri: false,
        pinned: false,
        date: new Date().toLocaleString()
      });
    }

    const pinnedComments = this.state.messages.map((message, index) => {
      if (message.pinned) {
        return (
          <CommentCardComponent
            key={index}
            index={index}
            sender={message.sender}
            message={message.message}
            onDuty={this.props.commentPressed}
            uri={message.uri}
            date={message.date}
            pinned={message.pinned}
            pinnedButtonPressed={this.pinnedButtonPressed}
          />
        );
      }
    });

    const comments = this.state.messages.map((message, index) =>
    // <TouchableOpacity onPress={this.props.commentPressed} >
      <CommentCardComponent
        key={index}
        index={index}
        sender={message.sender}
        message={message.message}
        onDuty={this.props.commentPressed}
        uri={message.uri}
        date={message.date}
        pinned={message.pinned}
        pinnedButtonPressed={this.pinnedButtonPressed}
      />
    // </TouchableOpacity>
    );
    return (
      <View>
        {pinnedComments}
        <ReorderCardComponent func={this.reorder} />
        {comments}
      </View>
    );
  }

}
