import React, { Alert, Component } from "react";
import { ScrollView, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SearchBarComponent from '../../components/customSearchBarComponent';
import CardComponent from '../../components/customCardComponent';

import ButtonComponent from "../../components/customButtonComponent";
import {Ionicons} from "@expo/vector-icons";

import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
          {title: 'P036986219',
            priority: 'P2',
            code: '3C-CRIME PREVENTION ADVICE',
            destination: '10 Waterloo Quadrant',
            date: '17/03/19 5:35PM',
            status: 'PENDING',
            latlng: {latitude: -36.848671,
              longitude: 174.770107}
        },
        {
            title: 'P036986218',
            priority: 'P2',
            code: '3C-CRIME PREVENTION ADVICE',
            destination: '10 Waterloo Quadrant',
            date: '17/03/19 5:35PM',
            status: 'PENDING',
            latlng: {latitude: -36.853943,
              longitude: 174.768265}
        },
        {
            title: 'P036986217',
            priority: 'P2',
            code: '3C-CRIME PREVENTION ADVICE',
            destination: '10 Waterloo Quadrant',
            date: '17/03/19 5:35PM',
            status: 'PENDING',
            latlng: {latitude: -36.852638,
              longitude: 174.768265}
        },
    ],};
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
    return this.state.data.length;
  };

  newJob = () => {
    this.props.navigation.navigate("NewFieldEvent")
  }

  render() {
    const cards = this.state.data.map(job =>         
    <TouchableOpacity key={job.title} 
    onPress={() => 
    this.props.navigation.navigate('IndividualJob', {id: 1, title: job.title, code: job.code, date: job.date, status: job.status, priority: job.priority, latlng: job.latlng})}>
      <CardComponent key={job.title} 
      title={job.title} 
      titlecontent={[job.code, job.destination]}
      leftbottom={job.date} rightbottom={job.status}    
      
      /></TouchableOpacity>)
    return (
        <View>
            <SearchBarComponent title='Jobs'/>
            <ScrollView >
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
