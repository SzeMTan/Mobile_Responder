import React, { Component } from "react";
import CommentTestScreen from "./comments";
import MessageInputComponent from "../../components/customMessageInputComponent";
import ModalSelector from "react-native-modal-selector";
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActionSheetIOS,
  Platform,
  TextInput
} from "react-native";
import SegmentControlComponent from "../../components/customSegmentControlComponent";
import CardComponent from "../../components/customCardComponent";
import ButtonComponent from "../../components/customButtonComponent";
import { Ionicons } from "@expo/vector-icons";
import GLOBAL from "../../global";
import getStyleSheet from "../../styles/style";

export default class IndividualJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      uri: "",
      message: "",
      assigned: false,
      teamAssigned: "",
      jobStatus: "",
      jobCloseCode: "",
      arrayIndex: props.navigation.getParam("id")
    };
  }

  static defaultProps = {
    jobCloseCodes: ["K1", "K2", "K3", "K6", "K8", "K9", "Cancel"],
    jobCloseCodesAndroid: [
      { key: 0, label: "K1" },
      { key: 1, label: "K2" },
      { key: 2, label: "K3" },
      { key: 3, label: "K6" },
      { key: 4, label: "K8" },
      { key: 5, label: "K9" }
    ]
  };

  componentDidMount() {
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

  componentWillMount() {
    job = GLOBAL.jobs[this.state.arrayIndex];
    this.setState({
      assigned: job.assigned,
      teamAssigned: job.teamAssigned,
      jobStatus: job.status,
      jobCloseCode: job.jobCloseCode
    });
  }

  setIndex = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };

  static navigationOptions = ({ navigation }) => {
    const {
      state: { params = {} }
    } = navigation;
    return {
      title: params.title || "JOB",
      headerTitleStyle: styles.header,
      headerStyle: styles.header,
      headerTintColor: styles.headerText.color,
      headerRight: <View />
    };
  };

  postMessage = message => {
    this.setState({
      ...this.state,
      message: message,
      uri: ""
    });
  };

  goToTop = () => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  };

  cameraPressed = () => {
    this.props.navigation.navigate("Camera", { send: this.sendImage });
  };

  sendImage = uri => {
    this.setState({
      ...this.state,
      uri: uri,
      message: ""
    });
  };

  assignJob() {
    this.setState({
      assigned: true,
      teamAssigned: GLOBAL.globalUnit,
      jobStatus: "ASSIGNED"
    });

    GLOBAL.jobs[this.state.arrayIndex].assigned = true;
    GLOBAL.jobs[this.state.arrayIndex].teamAssigned = GLOBAL.globalUnit;
    GLOBAL.jobs[this.state.arrayIndex].status = "ASSIGNED";
  }

  closeJob(resolutionCode) {
    this.setState({
      jobStatus: "CLOSED",
      jobCloseCode: resolutionCode
    });
    GLOBAL.jobs[this.state.arrayIndex].status = "CLOSED";
    GLOBAL.jobs[this.state.arrayIndex].jobCloseCode = resolutionCode;
  }

  commentPressed = () => {
    this.props.navigation.navigate('OnDuty', {msg: this.state.message});
  };

  commentPressedVehicle = () => {
    this.props.navigation.navigate('OnDutyVehicle');
  };
  renderTabContent = index => {
    const jobStatusTextEnd =
      this.state.jobStatus == "ASSIGNED"
        ? "-" + this.state.teamAssigned
        : this.state.jobStatus == "CLOSED"
        ? "-" + this.state.jobCloseCode
        : "";
    const jobStatusText = this.state.jobStatus + jobStatusTextEnd;
    const { caller, headline, cross, times } = GLOBAL.jobs[
      this.state.arrayIndex
    ];
    if (index === 0) {
      return (
        <View style={[styles.containerView, styles.jobEndContainer]}>
          <ScrollView
            ref={c => {
              this.scroll = c;
            }}
            style={styles.containerView}
          >
            <CardComponent
              title={
                this.state.assigned
                  ? "Assigned: " + this.state.teamAssigned
                  : "Assigned: unassigned"
              }
            />

            <CardComponent
              title="JOB INFO"
              titlecontent={[
                "Job code: " + this.props.navigation.getParam("code"),
                "Time Reported: " + this.props.navigation.getParam("date"),
                "Job status: " + jobStatusText,
                "Priority: " + this.props.navigation.getParam("priority", "P1")
              ]}
            />
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Map", {
                  latlng: this.props.navigation.getParam("latlng")
                })
              }
            >
              <CardComponent
                title="LOCATION"
                titlecontent={[
                  this.props.navigation.getParam("destination", "N/A")
                ]}
              />
            </TouchableOpacity>
            <CardComponent
              title="TIMES"
              titlecontent={[
                "Dispatched: " + times.dispatched,
                "First Arrival: " + times.firstArrival,
                "Closed: " + times.closed
              ]}
            />
            <CardComponent title="HEADLINE" titlecontent={[headline]} />
            <CardComponent
              title="CROSS STREETS"
              titlecontent={[
                "X-STREET 1 - " + cross.x1,
                "X-STREET 1 - " + cross.x2
              ]}
            />
            <CardComponent
              title="CALLER INFO"
              titlecontent={[
                "Source: " + caller.source,
                "Name: " + caller.name,
                "Address: " + caller.address,
                "Number: " + caller.number
              ]}
            />
          </ScrollView>
          {!this.state.assigned ||
          (this.state.jobStatus === "ASSIGNED" &&
            this.state.teamAssigned === GLOBAL.globalUnit) ? (
            <TouchableOpacity
              style={styles.iconButtonStyle}
              onPress={this.goToTop.bind(this)}
            >
              <Ionicons name="ios-arrow-up" size={30} color="#fff" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.newJobIcon}
              onPress={this.goToTop.bind(this)}
            >
              <Ionicons name="ios-arrow-up" size={30} color="#fff" />
            </TouchableOpacity>
          )}

          {!this.state.assigned ? (
            <ButtonComponent
              title="Assign job"
              onPress={() => this.assignJob()}
            />
          ) : this.state.jobStatus === "ASSIGNED" &&
            this.state.teamAssigned === GLOBAL.globalUnit ? (
            Platform.OS == "ios" ? (
              <ButtonComponent
                title="Close job"
                onPress={() => {
                  ActionSheetIOS.showActionSheetWithOptions(
                    {
                      options: this.props.jobCloseCodes,
                      title: "Resolution Code",
                      cancelButtonIndex: this.props.jobCloseCodes.length - 1
                    },
                    buttonIndex => {
                      if (buttonIndex < this.props.jobCloseCodes.length - 1) {
                        this.closeJob(this.props.jobCloseCodes[buttonIndex]);
                      }
                    }
                  );
                }}
              />
            ) : (
              <ModalSelector
                data={this.props.jobCloseCodesAndroid}
                initValue="Close job"
                onChange={option => {
                  this.closeJob(option.label);
                }}
                style={styles.button}
              >
                <TextInput
                  style={{
                    borderColor: "transparent",
                    alignSelf: "center",
                    fontWeight: "500",
                    fontSize: 18
                  }}
                  editable={false}
                  placeholderTextColor="white"
                  placeholder="Close job"
                />
              </ModalSelector>
            )
          ) : null}
        </View>
      );
    } else {
      return (
        <View style={[styles.containerView, styles.jobEndContainer]}>
          <ScrollView
            ref={c => {
              this.scroll = c;
            }}
            style={styles.containerView}
            contentComponentStyle={styles.containerView}
          >
            <CommentTestScreen
              index={this.state.arrayIndex}
              title="Comments"
              uri={this.state.uri}
              message={this.state.message}
              commentPressed={() => this.commentPressed()}
              commentPressedVehicle={() => this.commentPressedVehicle()}
            />
          </ScrollView>
          <MessageInputComponent
            postMessage={this.postMessage}
            cameraPressed={this.cameraPressed}
          />
        </View>
      );
    }
  };

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    return (
      <View style={[styles.containerView, styles.appbackground]}>
        <SegmentControlComponent
          paramvalues={["INFO", "COMMENTS"]}
          tabAction={this.setIndex}
        />
        {this.renderTabContent(this.state.selectedIndex)}
      </View>
    );
  }
}
