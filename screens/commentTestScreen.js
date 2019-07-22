import React from "react";
import { View } from "react-native";

import Icon from "@expo/vector-icons/AntDesign";
import HeaderComponent from "../components/customHeaderComponent";

import ReorderCardComponent from "../components/customReorderCardComponent";
import CommentCardComponent from "../components/customCommentCardComponent";
import TextInputComponent from '../components/customTextInputComponent';
import MessageInputComponent from '../components/customMessageInputComponent';

export default class App extends React.Component {

  constructor(){
    super();
    selectedIndex: 0,
    this.state = {
      messages: [{
        sender: "PBY",
        message: "CALL FOR WINDOW",
        date: "17/03/19 2:16PM"
      },{
        sender: "ACY3",
        message: "POS WAS ON THE MOVE",
        date: "17/03/19 3:00PM"
      }
      // ,{
      //   sender: "d0710013",
      //   message: "YOUNG MALE ASKING FOR POLICE",
      //   date: "17/03/19 5:00PM"
      // },

      ]
    }
  }

  reorder = () => {
    this.setState({
      ...this.state,
      messages: this.state.messages.slice(0).reverse(),
    })
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
        <ReorderCardComponent func={this.reorder}/>
        {comments}
        <MessageInputComponent/>
      </View>
    );
  }
}
