import React from "react";
import { View } from "react-native";

import ReorderCardComponent from "../../components/customReorderCardComponent";
import CommentCardComponent from "../../components/customCommentCardComponent";

import { askPermissions } from "../../notifications";

import GLOBAL from "../../global";
import { getFormattedDate } from "../../helpers";

export default class CommentTestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      sender: GLOBAL.globalUnit,
      messages: [],
      newmessage: "",
      newuri: "",
      mounted: false,
      reorder: false
    };
  }

  componentWillMount() {
    if (this.props.index < 5) {
      this.state.messages = GLOBAL.messages[this.props.index];
      this.state.mounted = true;
    } else {
      this.state.messages = [];
    }
  }

  componentDidMount() {
    if (this.props.index < 5) {
      if (!GLOBAL.mounted[this.props.index]) {
        askPermissions(this.updateMessages.bind(this), this.props.index);
        GLOBAL.mounted[this.props.index] = true;
      }
    }
  }

  componentWillUnmount() {
    this.state.mounted = false;
  }

  updateMessages(message) {
    GLOBAL.messages[this.props.index].push(message);
    if (this.state.mounted) {
      this.state.messages = GLOBAL.messages[this.props.index];
      this.forceUpdate();
    }
  }

  pinnedButtonPressed = index => {
    this.state.messages[index].pinned = !this.state.messages[index].pinned;
    GLOBAL.messages[this.props.index] = this.state.messages;
    this.forceUpdate();
  };

  reorder = () => {
    this.state.reorder = !this.state.reorder;
    this.forceUpdate();
  };

  renderComment(message, index) {
    return (
      <CommentCardComponent
        key={index}
        index={index}
        sender={message.sender}
        message={message.message}
        onDuty={this.props.commentPressed}
        onDutyVehicle={this.props.commentPressedVehicle}
        uri={message.uri}
        date={message.date}
        pinned={message.pinned}
        pinnedButtonPressed={this.pinnedButtonPressed}
      />
    );
  }

  render() {
    if (this.props.uri != "" && this.state.newuri != this.props.uri) {
      formattedDate = getFormattedDate("");
      this.state.messages.push({
        sender: this.state.sender,
        message: this.props.uri,
        uri: true,
        pinned: false,
        date: formattedDate
      });
      this.state.newuri = this.props.uri;
      GLOBAL.messages[this.props.index] = this.state.messages;
    }
    if (
      this.props.message != "" &&
      this.state.newmessage != this.props.message
    ) {
      formattedDate = getFormattedDate("");
      this.state.messages.push({
        sender: this.state.sender,
        message: this.props.message,
        uri: false,
        pinned: false,
        date: formattedDate
      });
      this.state.newmessage = this.props.message;
      GLOBAL.messages[this.props.index] = this.state.messages;
    }

    const pinnedComments = this.state.messages.map((message, index) => {
      if (message.pinned) {
        return this.renderComment(message, index);
      }
    });

    const reverseComments = this.state.messages
      .slice(0)
      .reverse()
      .map((message, index) => this.renderComment(message, index));

    const comments = this.state.messages.map((message, index) =>
      this.renderComment(message, index)
    );

    return (
      <View>
        {pinnedComments}
        <ReorderCardComponent func={this.reorder} />
        {this.state.reorder ? reverseComments : comments}
      </View>
    );
  }
}
