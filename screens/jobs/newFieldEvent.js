import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Picker
} from "react-native";
import { Permissions, Location } from "expo";
import TextInput from "../../components/customTextInputComponent";
import HeaderComponent from "../../components/customHeaderComponent";

export default class NewFieldEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventType: "1310 Robbery",
      jobStatus: "PENDING",
      location: "Location not found",
      hasLocationPermissions: false
    };
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied"
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }
    let location = await Location.getCurrentPositionAsync({});

    fetch(
      "https://nominatim.openstreetmap.org/reverse?format=geojson&lat=" +
        location.coords.latitude +
        "&lon=" +
        location.coords.longitude
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.features[0].properties.display_name);
        this.state.location = responseJson.features[0].properties.display_name;
      })
      .catch(error => console.error(error));
  };

  static defaultProps = {
    eventTypes: [{ name: "1310 Robbery" }, { name: "1510 Serious Assault" }]
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
    console.log(this.state);
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
      <Picker.Item key={index} label={eventType.name} value={eventType.name} />
    ));
    return (
      <View style={{flex: 1}}>
        <HeaderComponent
          title="Create Field Event"
          filter={true}
          done={this.donePressed}
          cancel={this.cancelPressed}
        />
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
            selectedValue={this.state.jobStatus}
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
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  },
  picker: {
    height: 43,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  }
});
