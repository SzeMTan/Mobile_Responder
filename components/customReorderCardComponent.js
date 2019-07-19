import React, { Component } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class ReorderCardComponent extends Component {
    render() {
        return (
                <Card containerStyle={{ padding: 0, marginVertical: 0 }}>
                    <TouchableOpacity
                        style={{
                        flex: 1,
                        padding: 10,
                        marginLeft: 220
                        }}
                        onPress={() => {
                        console.log("sorting");
                        }}
                    >
                        <View
                        style={{
                            flexDirection: "row-reverse",
                            alignItems: "center"
                        }}
                        >
                        <MaterialCommunityIcons name="sort" size={20} />
                        <Text>OLDEST-NEWEST </Text>
                        </View>
                    </TouchableOpacity>
                </Card>
        );
    }
}
