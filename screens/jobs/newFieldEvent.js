import React, { Component } from "react";
// import { View } from "react-native";
import HeaderComponent from "../../components/customHeaderComponent";

// import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Picker} from "react-native";
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from "expo";
import { MaterialIcons } from "@expo/vector-icons";
import TextInput from "../../components/customTextInputComponent";
export default class NewFieldEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventType: "1310 Robbery",
      status: "PENDING",
    };
  }

  static defaultProps = {
    eventTypes: [{ name: "1310 Robbery" }, { name: "1510 Serious Assault" }],
  }
  updateEventType = eventType => {
    this.setState({ eventType: eventType });
  };

  updateStatus = status => {
    this.setState({ status: status });
  };
  
  cancelPressed = () => {
    this.props.navigation.goBack();
  }

  donePressed = () => {
    this.props.navigation.state.params.done(this.state)
    this.props.navigation.goBack();
  };

  static navigationOptions = ({ navigation }) => {
    const { state: { params = {} } } = navigation;
    return {
      header: null
    };
  };
  render() {
    const renderPickerItems = this.props.eventTypes.map((eventType, index) =>
      <Picker.Item key={index} label={eventType.name} value={eventType.name} />
    );
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.button} onPress={this.cancelPressed}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Create Field Event</Text>
          <TouchableOpacity style={styles.button} onPress={this.donePressed}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <Text style={styles.heading}>Event Type</Text>
          <Picker
            selectedValue={this.state.eventType}
            onValueChange={this.updateEventType}
            style={styles.picker}
          >
            {renderPickerItems}
          </Picker>
          <Text style={styles.heading}>Status</Text>
          <Picker
            selectedValue={this.state.status}
            onValueChange={this.updateStatus}
            style={styles.picker}
          >
                <Picker.Item label="PENDING" value="PENDING" />
                <Picker.Item label="COMPLETE" value="COMPLETE" />
          </Picker>
          <Text style={styles.heading}> Vehicle Registration</Text>
          <TextInput style={styles.loginFormTextInput}></TextInput>
          <Text style={styles.heading}> PRN </Text>
          <TextInput style={styles.loginFormTextInput}></TextInput>
          <Text style={styles.heading}> Comments </Text>
          <TextInput style={styles.loginFormTextInput}></TextInput>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white"
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#4630EB"
    borderColor: "#d3d3d3",
    borderBottomColor: "#d3d3d3"
  },
  pictures: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8
  },
  button: {
    padding: 20
  },
  headerText: {
    // color: "white",
    fontSize: 24
  },
  buttonText: {
    color: "#0084ff"
  },
  heading: {
      fontSize: 17,
      padding: 10
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  picker: {
    height: 43,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
});
