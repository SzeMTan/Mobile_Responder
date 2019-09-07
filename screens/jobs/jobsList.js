import React, { Component } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import HeaderComponent from "../../components/customHeaderComponent";
import SearchBarComponent from "../../components/customSearchBarComponent";
import CardComponent from "../../components/customCardComponent";

import ButtonComponent from "../../components/customButtonComponent";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'
import { FlatList } from "react-native-gesture-handler";

const styles = getStyleSheet(GLOBAL.darkState);

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export default class JobsList extends Component {
  componentDidMount() {
    FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "photos"
    ).catch(e => {
      console.log(e, "Directory exists");
    });
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
    this.props.navigation.navigate("JobFilter", {jobFilter: this.filterJobs});
  };
  
  filterJobs = object => {
    this.state.filter = object;
    console.log(this.state);
    this.forceUpdate();
  };

  newJobCreated = object => {
    console.log(object);
    console.log(new Date().getDate());
    console.log(new Date().getHours());
    console.log(new Date().getMinutes());
    const d = new Date();

    const formattedDate =
      d.getDate() +
      " " +
      monthNames[d.getMonth()] +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes();
    console.log(formattedDate);

    newEvent = {
      title: "P0" + Math.round(Math.random() * 100000000),
      priority: "P2",
      code: object.eventType,
      destination: object.location,
      date: formattedDate,
      status: object.jobStatus
    };
    GLOBAL.jobs.push(newEvent);
    this.forceUpdate();
  };

  renderCard(job){
    return <TouchableOpacity
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
        title={job.title}
        titlecontent={[job.code, job.destination]}
        leftbottom={job.date}
        rightbottom={job.status}
      />
    </TouchableOpacity>
  }
  render() {
    const cards =
      this.state.filter.dGroups == undefined
        ? GLOBAL.jobs.map(job => (
            this.renderCard(job)
          ))
        : GLOBAL.jobs
            .filter(
              job =>
                this.state.filter.priority.includes(job.priority) ||
                this.state.filter.dGroups.includes(job.destination)
            )
            .map(job => (
              this.renderCard(job)
            ));
    return (
      <View style={styles.containerView}>
        <View style={{ alignContent: "stretch", flexDirection: "row" }}>
          <SearchBarComponent title="Jobs" />
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={this.filter}
          >
            <MaterialCommunityIcons name="filter" size={40} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[styles.containerView, styles.jobCenterContainer]}>
            {cards} 
          </View>
          </ScrollView>
        <ButtonComponent
          icon={<Ionicons name="ios-add" size={30} color="#fff" />}
          onPress={this.newJob}
          isBackToTop={true}
        />
      </View>
    );
  }
}
