import React, { Component } from "react";
import { ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import HeaderComponent from '../../components/customHeaderComponent';
import ButtonComponent from "../../components/customButtonComponent";
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

export default class Home extends Component {
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
    constructor(){
        super()
        this.state = {
          selectedIndex:0
        };
      }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

    setIndex = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
          });
    }

  renderCard(job, index) {
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
            latlng: job.latlng
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
    );
  }

    renderTabContent = (index) => {
        if (index === 0){
            return  <ScrollView>
                      <CardComponent title='Unit status code: 10/10 '/>
                        <CardComponent title='Unit: CEPR22'
                        titlecontent={['Name: Bob','QID: bob123', 'phone no: +64 21 3613 4287', 'shift start: 0800', 'shift end: 1700', 'radio no: -']}/>
                      <ButtonComponent style={ styles.endJob } title='END SHIFT' 
                        onPress={() =>
                          {if(GLOBAL.jobs.filter(job=>job.assigned && job.status=="PENDING").length !=0) {
                            Alert.alert(
                              'Alert',
                              'You are still assigned to a job, would you like to close it before ending your shift?',
                              [
                                {text: 'Yes', onPress: () => {(GLOBAL.jobs.map((job, index) => {if (job.assigned == true & job.status=="PENDING") {console.log(index); GLOBAL.jobs[index].status = "COMPLETED";}})); this.props.navigation.navigate("Login")}},
                                {text: 'No', onPress: () => this.props.navigation.navigate("Login")},
                              ],
                              )
                        }else{
                          this.props.navigation.navigate("Login")
                        }}}
                        />
                    </ScrollView>
        }
        else {
            // return <View style={styles.containerView}>
                 return     <ScrollView>
                        <View style={styles.unitCenterContainer}>
                          <Text style={styles.homeText}>Current Jobs</Text>
                          {GLOBAL.jobs.filter(job=>job.assigned && job.status=="PENDING").map((job, index) => this.renderCard(job, index))}
                          <ButtonComponent style={ styles.endJob } title='END JOB' 
                            onPress={() => GLOBAL.jobs.map((job, index) => {if (job.assigned == true & job.status=="PENDING") {console.log(index); GLOBAL.jobs[index].status = "COMPLETED"; this.forceUpdate()}})}/>
                          <View style={styles.horizonalLine}/>
                          <Text style={styles.homeText}>Dispatched Jobs</Text>
                          {GLOBAL.jobs.filter(job=>job.assigned && job.status=="COMPLETED").map((job, index) => this.renderCard(job, index))}
                        </View>
                    </ScrollView>
                    // </View>
        }
    }

    render() {
        return (
            <View style={[styles.containerView, styles.appbackground]}>
                <HeaderComponent title='Home '/>
                <View style={styles.containerView}>

                <SegmentControlComponent paramvalues={['UNIT', 'JOB']} 
                    tabAction={this.setIndex}
                />
                {this.renderTabContent(this.state.selectedIndex)}
                </View>
            </View>
        );
    }
}
