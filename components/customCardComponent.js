import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Divider } from "react-native-elements";
import GLOBAL from "../global";
import getStyleSheet from "../styles/style";

export default class CardComponent extends Component {
  static defaultProps = {
    title: "",
    titlecontent: []
  };

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    return (
      <Card containerStyle={styles.card}>
        <Text 
        selectable
          style={[
            styles.cardTitle,
            { ...(this.props.titlecontent.length != 0 && { marginBottom: 10 }) }
          ]}
        >
          {this.props.title}
        </Text>

        {this.props.titlecontent.length != 0 &&
          this.props.titlecontent.map((st, index) => {
            return (
              <Text style={[{ marginVertical: 5 , color: styles.cardTitle.color}]} key={index}>
                {st}
              </Text>
            );
          })}

        {this.props.leftbottom && (
          <Divider style={styles.cardDivider} />
        )}

        {this.props.leftbottom && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[{ fontStyle: "italic" , color: styles.cardTitle.color}]}>{this.props.leftbottom}</Text>
            <Text style={{ color: styles.cardTitle.color}}>{this.props.rightbottom}</Text>
          </View>
        )}
      </Card>
    );
  }
}
