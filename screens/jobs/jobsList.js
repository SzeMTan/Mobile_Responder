import React, { Alert, Component } from "react";
import { ScrollView, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SearchBarComponent from '../../components/customSearchBarComponent';
import CardComponent from '../../components/customCardComponent';

import ButtonComponent from "../../components/customButtonComponent";
import {Ionicons} from "@expo/vector-icons";

import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'
import { FlatList } from "react-native-gesture-handler";

const styles = getStyleSheet(GLOBAL.darkState);

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
  };
  }

  static navigationOptions = ({ navigation }) => {
    const { state: { params = {} } } = navigation;
    return {
      header: (
        <HeaderComponent title={'Jobs('+navigation.getParam('jobsListSize')+')'}/>
      ),
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ jobsListSize: this._JobsListSize()});
  }

  _JobsListSize = () => {
    return GLOBAL.jobs.length;
  };

  newJob = () => {
    this.props.navigation.navigate("NewFieldEvent", {
      done: this.newJobCreated
    });
  };

  newJobCreated = object => {
    console.log(object);
    newEvent = {
      title: "generate random id",
      priority: "P2",
      code: object.eventType,
      destination: "get current location",
      date: new Date().toLocaleString(),
      status: object.status
    };
    console.log(newEvent);
    this.state.data.push(newEvent);
    console.log(this.state);
    this.forceUpdate();
  };

  render() {
    const cards = GLOBAL.jobs.map(job =>         
    <TouchableOpacity key={job.title} 
    onPress={() => 
    this.props.navigation.navigate('IndividualJob', {id: 1, title: job.title, code: job.code, date: job.date, status: job.status, priority: job.priority, latlng: job.latlng})}>
      <CardComponent key={job.title} 
      title={job.title} 
      titlecontent={[job.code, job.destination]}
      leftbottom={job.date} rightbottom={job.status}    
      
      /></TouchableOpacity>)
    return (
      <View style={styles.containerView}>
        <SearchBarComponent title="Jobs" />
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
