import React, { Component } from "react";
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import HeaderComponent from '../../components/customHeaderComponent';
import ButtonComponent from "../../components/customButtonComponent";
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);
export default class Home extends Component {
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

  renderCard(job) {
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
                    </ScrollView>
        }
        else {
            return <ScrollView>
                        <View style={styles.unitCenterContainer}>
                          <Text style={{fontSize: 25, marginTop: 10, alignSelf: "center"}}>Current Jobs</Text>
                          {GLOBAL.jobs.filter(job=>job.assigned && job.status=="PENDING").map(job => this.renderCard(job))}
                          <ButtonComponent style={ styles.endJob } title='END JOB ->' onPress={() => this.props.navigation.navigate('Login')}/>
                          <View style={styles.horizonalLine}/>
                          <Text style={{fontSize: 25, marginTop: 10, alignSelf: "center"}}>Dispatched Jobs</Text>
                          {GLOBAL.jobs.filter(job=>job.assigned && job.status=="COMPLETED").map(job => this.renderCard(job))}
                        </View>
                    </ScrollView>
        }
    }

    render() {
        return (
            <View >
                <HeaderComponent title='HOME'/>
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
