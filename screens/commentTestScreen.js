import React from "react";
import { View } from "react-native";

import Icon from "@expo/vector-icons/AntDesign";
import HeaderComponent from "../components/customHeaderComponent";

import ReorderCardComponent from "../components/customReorderCardComponent";
import CommentCardComponent from "../components/customCommentCardComponent";
import TextInputComponent from "../components/customTextInputComponent";
import MessageInputComponent from "../components/customMessageInputComponent";

export default class App extends React.Component {
  constructor() {
    super();
    selectedIndex: 0, (this.state = {
      sender: "d0710013",
      messages: [
        {
          sender: "PBY",
          message: "CALL FOR WINDOW",
          date: "17/03/19 2:16PM",
          uri: false
        },
        {
          sender: "ACY3",
          message: "POS WAS ON THE MOVE",
          uri: false,
          date: "17/03/19 3:00PM"
        }
        ,{
          sender: "d0710013",
          message: "YOUNG MALE ASKING FOR POLICE",
          uri: false,
          date: "17/03/19 5:00PM"
        },
      ]
    });
  }

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
        date: new Date().toLocaleString()
      });
    }
    if (this.props.message != "") {
      this.state.messages.push({
        sender: this.state.sender,
        message: this.props.message,
        uri: false,
        date: new Date().toLocaleString()
      });
    }
    const comments = this.state.messages.map((message, index) =>
      <CommentCardComponent
        key={index}
        sender={message.sender}
        message={message.message}
        uri={message.uri}
        date={message.date}
      />
    );
    return (
      <View>
        <ReorderCardComponent func={this.reorder} />
        {comments}
      </View>
    );
  }
}
