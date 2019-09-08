import React from "react";
import { View } from "react-native";

import ReorderCardComponent from "../../components/customReorderCardComponent";
import CommentCardComponent from "../../components/customCommentCardComponent";

import { askPermissions } from "../../notifications";

export default class CommentTestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      sender: "ACY3",
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

  componentDidMount() {
    askPermissions(this.updateMessages.bind(this));
  }

  updateMessages(message) {
    console.log(message);
    console.log(this.state)
    this.state.messages.push({
      sender: "d0710013",
      message: message,
      uri: false,
      pinned: false,
      date: new Date().toLocaleString()
    });
    this.forceUpdate()
  }

  pinnedButtonPressed = index => {
    this.state.messages[index].pinned = !this.state.messages[index].pinned;
    this.setState({
      ...this.state
    });
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

    const comments = this.state.messages.map((message, index) => (
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
    ));
    return (
      <View>
        {pinnedComments}
        <ReorderCardComponent func={this.reorder} />
        {comments}
      </View>
    );
  }
}
