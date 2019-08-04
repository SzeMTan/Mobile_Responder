import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Card } from "react-native-elements";
import Icon from "@expo/vector-icons/AntDesign";

export default class ReorderCardComponent extends Component {
  render() {
    const { message } = this.props;
    return (
      <Card containerStyle={{ marginVertical: 0, padding: 0 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View style={{ paddingLeft: 10, paddingTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {this.props.sender}
            </Text>
          </View>
          <View style={{ margin: 0, padding: 0 }}>
            <Icon.Button
              name="pushpino"
              backgroundColor="red"
              color="black"
              onPress={() => {
                console.log("pinned");
              }}
              underlayColor="rgba(255, 255, 255, 0)"
              iconStyle={{ padding: 0, margin: 0 }}
            />
          </View>
        </View>
        {this.props.uri
          ? <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: 150,
                  height: 150,
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 5
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    top: 0,
                    resizeMode: "contain"
                  }}
                  source={{ uri: message }}
                />
              </View>
            </View>
          : <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>
                {this.props.message}
              </Text>
            </View>}
        <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
          <Text style={{ fontStyle: "italic" }}>
            {this.props.date}
          </Text>
        </View>
      </Card>
    );
  }
}
