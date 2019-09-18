import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Divider } from "react-native-elements";
import GLOBAL from "../global";
import getStyleSheet from "../styles/style";

export default class CardComponent extends Component {
  static defaultProps = {
    title: "",
    titlecontent: [],
    colors: new Map()
      .set("P0", "#a51401")
      .set("P1", "#e14900")
      .set("P2", "#de6e00")
      .set("P3", "#e3a200")
      .set("P4", "#018592")
      .set("P5", "#03508d")
      .set("P6", "#001276")
      .set("P7", "#3a0f66")
      .set("P8", "#7b1251")
      .set("P9", "#008316")
  };

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    return (
      <Card containerStyle={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Text
            selectable
            style={[
              styles.cardTitle,
              {
                ...(this.props.titlecontent.length != 0 && { marginBottom: 10 })
              }
            ]}
          >
            {this.props.title}
          </Text>
          {this.props.priority && (
            <Text
              style={[
                styles.cardTitle,
                {
                  ...(this.props.titlecontent.length != 0 && {
                    marginBottom: 10
                  })
                }
              ]}
            >
              -
            </Text>
          )}
          {this.props.priority && (
            <View
              style={[
                {
                  borderColor: "white",
                  backgroundColor: this.props.colors.get(this.props.priority),
                  borderWidth: 1,
                  borderRadius: 13,
                  marginHorizontal: 5,
                  paddingHorizontal: 5,
                  paddingBottom: 0,
                  marginBottom: 0,
                  maxHeight: 28
                }
              ]}
            >
              <Text
                style={[
                  styles.cardTitle,
                  { paddingBottom: 0, marginBottom: 0 }
                ]}
              >
                {this.props.priority}
              </Text>
            </View>
          )}
        </View>
        {this.props.titlecontent.length != 0 &&
          this.props.titlecontent.map((st, index) => {
            return (
              <Text
                style={[{ marginVertical: 5, color: styles.cardTitle.color }]}
                key={index}
              >
                {st}
              </Text>
            );
          })}

        {this.props.leftbottom && <Divider style={styles.cardDivider} />}

        {this.props.leftbottom && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[{ fontStyle: "italic", color: styles.cardTitle.color }]}
            >
              {this.props.leftbottom}
            </Text>
            <Text style={{ color: styles.cardTitle.color }}>
              {this.props.rightbottom}
            </Text>
          </View>
        )}
      </Card>
    );
  }
}
