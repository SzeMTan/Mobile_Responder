import React, { Alert, Component } from "react";
import { ScrollView, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SearchBarComponent from '../../components/customSearchBarComponent';
import CardComponent from '../../components/customCardComponent';

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

  render() {
    const cards = this.state.data.map(job =>         
    <TouchableOpacity key={job.title} onPress={() => this.props.navigation.navigate('IndividualJob', {id: 1, title: job.title})}>
      <CardComponent key={job.title} 
      title={job.title} 
      titlecontent={[job.code, job.destination]}
      leftbottom={job.date} rightbottom={job.status}    
      
      /></TouchableOpacity>)
    return (
        <View>
            <SearchBarComponent title='Jobs'/>
            <ScrollView >
                <View style={{flex:1,justifyContent:'center'}}>
                    {cards}
                </View>
            </ScrollView>
        </View>
    );
  }
}
