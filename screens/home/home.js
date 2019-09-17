import React, { Component } from "react";
import {
  ActionSheetIOS,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Platform,
  TextInput
} from "react-native";
import SegmentControlComponent from "../../components/customSegmentControlComponent";
import CardComponent from "../../components/customCardComponent";
import HeaderComponent from "../../components/customHeaderComponent";
import ButtonComponent from "../../components/customButtonComponent";
import GLOBAL from "../../global";
import getStyleSheet from "../../styles/style";
import ModalSelector from "react-native-modal-selector";

export default class Home extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      styles = getStyleSheet(GLOBAL.darkState);
      this.forceUpdate();
    });
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

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      currentJob: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  setIndex = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };

  closeJob(resolutionCode) {
    GLOBAL.jobs.map((job, index) => {
      if (job.teamAssigned == GLOBAL.globalUnit) {
        GLOBAL.jobs[index].status = "CLOSED";
        GLOBAL.jobs[index].jobCloseCode = resolutionCode;
      }
    });
    this.state.currentJob = false;
    this.forceUpdate();
  }

  renderCard(job, index) {
    const jobStatusTextEnd =
      job.status == "ASSIGNED"
        ? "-" + job.teamAssigned
        : job.status == "CLOSED"
        ? "-" + job.jobCloseCode
        : "";
    const jobStatusText = job.status + jobStatusTextEnd;
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          this.props.navigation.navigate("IndividualJob", {
            id: 1,
            title: job.title,
            code: job.code,
            date: job.date,
            status: job.status,
            priority: job.priority,
            latlng: job.latlng,
            destination: job.destination
          })
        }
      >
        <CardComponent
          key={job.title}
          title={job.title}
          titlecontent={[job.code, job.destination]}
          leftbottom={job.date}
          rightbottom={jobStatusText}
        />
      </TouchableOpacity>
    );
  }

  renderTabContent = index => {
    if (index === 0) {
      return (
        <ScrollView>
          <CardComponent title="Unit status code: 10/10 " />
          <CardComponent
            title={"Unit: " + GLOBAL.globalUnit}
            titlecontent={[
              "Name: " + GLOBAL.units[3].names,
              "QID: " + GLOBAL.units[3].userids,
              "phone no: +64 21 3613 4287",
              "shift start: 0800",
              "shift end: 1700",
              "radio no: -"
            ]}
          />
          <ButtonComponent
            style={styles.endJob}
            title="END SHIFT"
            onPress={() => {
              if (
                GLOBAL.jobs.filter(
                  job => job.assigned && job.status == "PENDING"
                ).length != 0
              ) {
                Alert.alert(
                  "Alert",
                  "You are still assigned to a job, would you like to close it before ending your shift?",
                  [
                    {
                      text: "Yes",
                      onPress: () => {
                        GLOBAL.jobs.map((job, index) => {
                          if (
                            (job.assigned == true) &
                            (job.teamAssigned == GLOBAL.globalUnit)
                          ) {
                            GLOBAL.jobs[index].status = "CLOSED";
                          }
                        });
                        this.props.navigation.navigate("Login");
                      }
                    },
                    {
                      text: "No",
                      onPress: () => this.props.navigation.navigate("Login")
                    },
                    { text: "Cancel", onPress: () => console.log("cancelled") }
                  ]
                );
              } else {
                this.props.navigation.navigate("Login");
              }
            }}
          />
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <View style={styles.unitCenterContainer}>
            <Text style={styles.homeText}>Current Jobs</Text>
            {GLOBAL.jobs
              .filter(
                job =>
                  job.assigned &&
                  job.status == "ASSIGNED" &&
                  job.teamAssigned == GLOBAL.globalUnit
              )
              .map((job, index) => {
                this.state.currentJob = true;
                return this.renderCard(job, index);
              })}
            {Platform.OS == "ios" ? (
              <ButtonComponent
                title="Close job"
                style={styles.endJob}
                disabled={!this.state.currentJob}
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
                style={styles.endJob}
              >
                <TextInput
                  style={{
                    borderColor: "transparent",
                    alignSelf: "center",
                    fontWeight: "200",
                    fontSize: 18
                  }}
                  editable={false}
                  placeholderTextColor="white"
                  placeholder="Close job"
                />
              </ModalSelector>
            )}
            <View style={styles.horizonalLine} />
            <Text style={styles.homeText}>Dispatched Jobs</Text>
            {GLOBAL.jobs
              .filter(
                job =>
                  job.assigned &&
                  job.status == "CLOSED" &&
                  job.teamAssigned == GLOBAL.globalUnit
              )
              .map((job, index) => this.renderCard(job, index))}
          </View>
        </ScrollView>
      );
    }
  };

  render() {
    return (
      <View style={[styles.containerView, styles.appbackground]}>
        <HeaderComponent title="Home " />
        <View style={styles.containerView}>
          <SegmentControlComponent
            paramvalues={["UNIT", "JOB"]}
            tabAction={this.setIndex}
          />
          {this.renderTabContent(this.state.selectedIndex)}
        </View>
      </View>
    );
  }
}
