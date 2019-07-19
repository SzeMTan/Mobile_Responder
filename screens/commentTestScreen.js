import React from "react";
import { View } from "react-native";

import Icon from "@expo/vector-icons/AntDesign";
import HeaderComponent from "../components/customHeaderComponent";

import ReorderCardComponent from "../components/customReorderCardComponent";
import CommentCardComponent from "../components/customCommentCardComponent";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      messages: [{
        sender: "PBY",
        message: "CALL FOR WINDOW",
        date: "17/03/19 2:16PM"
      }

      ]
    }
  }
  render() {
    const comments = this.state.messages.map(
      (message, index) =>         
      <CommentCardComponent
      key={index} 
      sender={message.sender} 
      message={message.message}
      date={message.date}
      />
      )

    return (
      <View>
        <HeaderComponent title="Test" />
        <ReorderCardComponent/>
        {comments}
      </View>
    );
  }
}