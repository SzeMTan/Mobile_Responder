import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Divider } from "react-native-elements";
import GLOBAL from "../global";
import getStyleSheet from "../styles/style";

const styles = getStyleSheet(GLOBAL.darkState);

export default class CardComponent extends Component {
  static defaultProps = {
    title: "",
    titlecontent: []
  };

  render() {
    return (
      <Card>
        <Text
          style={[
            { fontSize: 20 },
            { ...(this.props.titlecontent.length != 0 && { marginBottom: 10 }) }
          ]}
        >
          {this.props.title}
        </Text>

        {this.props.titlecontent.length != 0 &&
          this.props.titlecontent.map((st, index) => {
            return (
              <Text style={{ marginVertical: 5 }} key={index}>
                {st}
              </Text>
            );
          })}

        {this.props.leftbottom && (
          <Divider style={{ backgroundColor: "blue", marginVertical: 10 }} />
        )}

        {this.props.leftbottom && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontStyle: "italic" }}>{this.props.leftbottom}</Text>
            <Text>{this.props.rightbottom}</Text>
          </View>
        )}
      </Card>
    );
  }
}
