import React, { Alert, Component } from "react";
import { ScrollView, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SearchBarComponent from '../../components/customSearchBarComponent';
import CardComponent from '../../components/customCardComponent';
// import styles from '../../styles/style'
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
        },
        {
            title: 'P036986218',
            priority: 'P2',
            code: '3C-CRIME PREVENTION ADVICE',
            destination: '10 Waterloo Quadrant',
            date: '17/03/19 5:35PM',
            status: 'PENDING',
        },
        {
            title: 'P036986217',
            priority: 'P2',
            code: '3C-CRIME PREVENTION ADVICE',
            destination: '10 Waterloo Quadrant',
            date: '17/03/19 5:35PM',
            status: 'PENDING',
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

  render() {
    const cards = this.state.data.map(job =>         
    <TouchableOpacity key={job.title} 
    onPress={() => 
    this.props.navigation.navigate('IndividualJob', {id: 1, title: job.title, code: job.code, date: job.date, status: job.status, priority: job.priority})}>
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
        </View>
    );
  }
}
