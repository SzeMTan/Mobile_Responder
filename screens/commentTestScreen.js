import React from "react";
import { View } from "react-native";

import Icon from "@expo/vector-icons/AntDesign";
import HeaderComponent from "../components/customHeaderComponent";

import ReorderCardComponent from "../components/customReorderCardComponent";
import CommentCardComponent from "../components/customCommentCard";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <HeaderComponent title="Test" />
        <ReorderCardComponent/>
        <CommentCardComponent/>
      </View>
    );
  }
}