import React, { Component } from "react";
import CommentTestScreen from "./comments";
import MessageInputComponent from "../../components/customMessageInputComponent";

import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import ButtonComponent from '../../components/customButtonComponent';
import { Ionicons } from '@expo/vector-icons';
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

export default class IndividualJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      uri: "",
      message: "",
      assigned: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      styles = getStyleSheet(GLOBAL.darkState);
      this.forceUpdate()
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  componentWillMount(){
    GLOBAL.jobs.filter(job => this.props.navigation.getParam("title") == job.title).map(job=>this.setState({assigned: job.assigned}))
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
      headerTintColor: 'white',
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
    this.setState({assigned : true})
  }

  commentPressed = () => {
    this.props.navigation.navigate('OnDuty')
  }

  renderTabContent = index => {
    if (index === 0) {
      return (
        <View style={[styles.containerView, styles.jobEndContainer]}>
          <ScrollView
            ref={c => {
              this.scroll = c;
            }}
            style={styles.containerView}
          >
            <CardComponent title={this.state.assigned ? 'Assigned: Assigned' : 'Assigned: Unassigned' }/>
            <CardComponent
              title="JOB INFO"
              titlecontent={[
                "Job code: " + this.props.navigation.getParam("code"),
                "Time Reported: " + this.props.navigation.getParam("date"),
                "Job status: " + this.props.navigation.getParam("status"),
                "Priority: " + this.props.navigation.getParam("priority", "P1")
              ]}
            />
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Map', {latlng: this.props.navigation.getParam("latlng")})}>
            <CardComponent
              title="LOCATION"
              titlecontent={[
                this.props.navigation.getParam("destination", "N/A")
              ]}
            />
            </TouchableOpacity>
            <CardComponent
              title="TIMES"
              titlecontent={["Dispatched: ", "First Arrival: ", "Closed: "]}
            />
            <CardComponent title="HEADLINE" titlecontent={["ORANGE 1- "]} />
            <CardComponent
              title="CROSS STREETS"
              titlecontent={[
                "X-STREET 1 - Collow RD",
                "X-STREET 1 - SELWYN AVE"
              ]}
            />
            <CardComponent
              title="CALLER INFO"
              titlecontent={["Source: ", "Name", "Address", "Number"]}
            />
          </ScrollView>
          <ButtonComponent
            icon={<Ionicons name="ios-arrow-up" size={30} color="#fff" />}
            onPress={this.goToTop}
            isBackToTop={true}
          />
          {this.state.assigned ? null : <ButtonComponent title="Assign job" onPress={() => this.assignJob()} />}
          
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
              title="Comments"
              uri={this.state.uri}
              message={this.state.message}
              commentPressed={() => this.commentPressed()}
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
    return (
      <View style={styles.containerView}>
        <SegmentControlComponent
          paramvalues={["INFO", "COMMENTS"]}
          tabAction={this.setIndex}
        />
        {this.renderTabContent(this.state.selectedIndex)}
      </View>
    );
  }
}
