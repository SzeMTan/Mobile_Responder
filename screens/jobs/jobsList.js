import React, { Component } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import HeaderComponent from "../../components/customHeaderComponent";
import CardComponent from "../../components/customCardComponent";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import GLOBAL from "../../global";
import getStyleSheet from "../../styles/style";

import { getFormattedDate } from "../../helpers";
styles = getStyleSheet(GLOBAL.darkState);

export default class JobsList extends Component {
  componentDidMount() {
    FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "photos"
    ).catch(e => {});
  }

  componentWillMount() {
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
  constructor(props) {
    super(props);
    this.state = {
      filter: []
    };
  }

  static navigationOptions = ({ navigation }) => {
    const {
      state: { params = {} }
    } = navigation;
    return {
      header: (
        <HeaderComponent
          title={"Jobs(" + navigation.getParam("jobsListSize") + ")"}
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ jobsListSize: this._JobsListSize() });
  }

  _JobsListSize = () => {
    return GLOBAL.jobs.length;
  };

  newJob = () => {
    this.props.navigation.navigate("NewFieldEvent", {
      done: this.newJobCreated
    });
  };

  filter = () => {
    this.props.navigation.navigate("JobFilter", { jobFilter: this.filterJobs });
  };

  filterJobs = object => {
    this.state.filter = object;
    this.forceUpdate();
  };

  newJobCreated = object => {
    formattedDate = getFormattedDate("");

    newEvent = {
      title: "P0" + Math.round(Math.random() * 100000000),
      priority: "P2",
      code: object.eventType,
      destination: object.location,
      date: formattedDate,
      status: object.jobStatus,
      assigned: true,
      teamAssigned: GLOBAL.globalUnit
    };
    GLOBAL.jobs.push(newEvent);
    this.forceUpdate();
  };

  renderCard(job) {
    const jobStatusTextEnd =
      job.status == "ASSIGNED"
        ? "-" + job.teamAssigned
        : job.status == "CLOSED"
        ? "-" + job.jobCloseCode
        : "";
    const jobStatusText = job.status + jobStatusTextEnd;
    return (
      <TouchableOpacity
        key={job.title}
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
          title={job.title + "-" + job.priority}
          titlecontent={[job.code, job.destination]}
          leftbottom={job.date}
          rightbottom={jobStatusText}
        />
      </TouchableOpacity>
    );
  }
  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    const cards =
      this.state.filter.dGroups == undefined
        ? GLOBAL.jobs.map(job => this.renderCard(job))
        : GLOBAL.jobs
            .filter(
              job =>
                this.state.filter.priority.includes(job.priority) ||
                this.state.filter.dGroups.includes(job.destination)
            )
            .map(job => this.renderCard(job));
    return (
      <View style={[styles.containerView, styles.appbackground]}>
        <ScrollView>
          <View style={[styles.containerView, styles.jobCenterContainer]}>
            {cards}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.filterIcon}
          onPress={this.filter.bind(this)}
        >
          <MaterialCommunityIcons name="filter" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.newJobIcon}
          onPress={this.newJob.bind(this)}
        >
          <Ionicons name="ios-add" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}
