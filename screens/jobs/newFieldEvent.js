import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Picker,
  Platform,
  ActionSheetIOS,
  TouchableOpacity
} from "react-native";
import { Permissions, Location } from "expo";
import TextInput from "../../components/customTextInputComponent";
import HeaderComponent from "../../components/customHeaderComponent";
import GLOBAL from "../../global";
import getStyleSheet from "../../styles/style";

export default class NewFieldEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventType: "1310 Robbery",
      jobStatus: "PENDING",
      location: "Location not found",
      hasLocationPermissions: false,
      lookingForLocation: false
    };
  }

  componentWillMount() {
    this.getLocationAsync();
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      styles = getStyleSheet(GLOBAL.darkState);
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied"
      });
    } else {
      this.setState({ hasLocationPermissions: true, lookingForLocation: true });
    }

    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync({});

      fetch(
        "https://nominatim.openstreetmap.org/reverse?format=geojson&lat=" +
          location.coords.latitude +
          "&lon=" +
          location.coords.longitude
      )
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            location: responseJson.features[0].properties.display_name,
            lookingForLocation: false
          });
        })
        .catch(error => {
          console.error(error);
          this.setState({ lookingForLocation: false });
        });
    }
  };

  static defaultProps = {
    eventTypes: [
      "3T Turnover",
      "1C Car/person acting suspiciously",
      "3F Foot patrol",
      "3H Hotel visit",
      "3M Directed patrol",
      "3R Road checkpoint",
      "3W Watching/observing",
      "4L Logistics/transport",
      "4Q enquiry/investigation",
      "5K Bail check",
      "6D Bail breach",
      "1310 Robbery",
      "1510 Serious Assault",
      "1640 Minor Assault"
    ],
    jobStatusButtons: ["PENDING", "ASSIGNED", "CLOSED"]
  };

  updateEventType = eventType => {
    this.setState({ eventType: eventType });
  };

  updateStatus = jobStatus => {
    this.setState({ jobStatus: jobStatus });
  };

  cancelPressed = () => {
    this.props.navigation.goBack();
  };

  donePressed = () => {
    this.props.navigation.state.params.done(this.state);
    this.props.navigation.goBack();
  };

  static navigationOptions = ({ navigation }) => {
    const {
      state: { params = {} }
    } = navigation;
    return {
      header: null
    };
  };

  render() {
    const renderPickerItems = this.props.eventTypes.map((eventType, index) => (
      <Picker.Item key={index} label={eventType} value={eventType} />
    ));
    return (
      <View style={[styles.containerView, styles.appbackground]}>
        <HeaderComponent
          title="Create Field Event"
          filter={true}
          done={this.donePressed}
          cancel={this.cancelPressed}
        />
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          {!this.state.hasLocationPermissions ? (
            <View>
              <Text style={styles.heading}>
                No Permission To get Location or Location is not on
              </Text>
            </View>
          ) : this.state.lookingForLocation ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                margin: 10
              }}
            >
              <ActivityIndicator size="small" color="#8BBE1B" />
              <Text style={styles.heading}> Looking for location...</Text>
            </View>
          ) : (
            <Text style={styles.heading}>Location: {this.state.location}</Text>
          )}
          <Text style={styles.heading}>Event Type</Text>

          {Platform.OS == "android" ? (
            <Picker
              selectedValue={this.state.eventType}
              onValueChange={this.updateEventType}
              style={styles.androidPicker}
            >
              {renderPickerItems}
            </Picker>
          ) : (
            <TouchableOpacity
              style={styles.pickerSelector}
              onPress={() => {
                ActionSheetIOS.showActionSheetWithOptions(
                  {
                    options: this.props.eventTypes,
                    title: "Event Type"
                  },
                  buttonIndex => {
                    this.updateEventType(this.props.eventTypes[buttonIndex]);
                  }
                );
              }}
            >
              <Text>{this.state.eventType}</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.heading}>Status</Text>
          {Platform.OS == "android" ? (
            <Picker
              selectedValue={this.state.jobStatus}
              onValueChange={this.updateStatus}
              style={styles.androidPicker}
            >
              <Picker.Item label="PENDING" value="PENDING" />
              <Picker.Item label="CLOSED" value="CLOSED" />
            </Picker>
          ) : (
            <TouchableOpacity
              style={styles.pickerSelector}
              onPress={() => {
                ActionSheetIOS.showActionSheetWithOptions(
                  {
                    options: this.props.jobStatusButtons,
                    title: "Status"
                  },
                  buttonIndex => {
                    this.updateStatus(this.props.jobStatusButtons[buttonIndex]);
                  }
                );
              }}
            >
              <Text>{this.state.jobStatus}</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.heading}> Vehicle Registration</Text>
          <TextInput style={styles.loginFormTextInput}></TextInput>
          <Text style={styles.heading}> PRN </Text>
          <TextInput style={styles.loginFormTextInput}></TextInput>
          <Text style={styles.heading}> Comments </Text>
          <TextInput
            style={[styles.loginFormTextInput, { height: 100 }]}
            multiline={true}
          ></TextInput>
        </ScrollView>
      </View>
    );
  }
}
