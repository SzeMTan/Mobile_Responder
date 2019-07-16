import React, { Component } from "react";
import { View, Text, ScrollView, Button } from 'react-native';
import styles from '../../styles/style';
import HeaderComponent from '../../components/customHeaderComponent';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import ButtonComponent from '../../components/customButtonComponent';
export default class IndividualJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:0,
            messages: [],
          };
    }

    setIndex = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
          });
    }

    static navigationOptions = ({ navigation }) => {
        const { state: { params = {} } } = navigation;
        return {
          title: params.title || 'JOB',
          headerTitleStyle: styles.header,
          headerRight: (<View />),
        };
      }

    renderTabContent = (index) => {
        if (index === 0){
            return  <View style={{flex:1, justifyContent:'flex-end'}}>
                    <ScrollView>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <CardComponent title='Assigned: Unassigned'/>
                            <CardComponent title='JOB INFO'
                                titlecontent={['Job code: ','Time Reported: ', 'Job status: ', 'Priority: ']}/>
                            <CardComponent title='LOCATION'/>
                            <CardComponent title='TIMES'
                                titlecontent={['Dispatched: ','First Arrival: ', 'Closed: ']}/>
                            <CardComponent title='HEADLINE' titlecontent={['ORANGE 1- ']}/>
                            <CardComponent title='CROSS STREETS' titlecontent={['X-STREET 1 - Collow RD', 'X-STREET 1 - SELWYN AVE']}/>
                            <CardComponent title='CALLER INFO' titlecontent={['Source: ', 'Name', 'Address', 'Number']}/>
                        </View>
                    </ScrollView>
                    <ButtonComponent title='Assign job'/>
                    </View>
        }
        else {
            return <ScrollView>
            <View style={{flex:1,justifyContent:'center'}}>
                <CardComponent title='Comments'/>
            </View>
        </ScrollView>
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SegmentControlComponent paramvalues={['INFO', 'COMMENTS']} 
                    tabAction={this.setIndex}
                />
                {this.renderTabContent(this.state.selectedIndex)}
            </View>
        );
    }
}

