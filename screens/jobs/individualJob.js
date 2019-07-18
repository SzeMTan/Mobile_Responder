import React, { Component } from "react";
import { View, Text, ScrollView, Button } from 'react-native';
import styles from '../../styles/style';
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

    goToTop = () => {
    this.scroll.scrollTo({x: 0, y: 0, animated: true});
    }

    renderTabContent = (index) => {

        if (index === 0){
            return <View style={{
                flex: 1,
                justifyContent:'flex-end'
            }}>
                     <ScrollView ref={(c) => {this.scroll = c}} style={{flex:1}}>
                             <CardComponent title='Assigned: Unassigned'/>
                             <CardComponent title='JOB INFO'
                                titlecontent={['Job code: ' + this.props.navigation.getParam("code"),
                                'Time Reported: ' + this.props.navigation.getParam("date"), 
                                'Job status: ' + this.props.navigation.getParam("status"), 
                                'Priority: '+this.props.navigation.getParam("priority", "P1")]}/>
                            <CardComponent title='LOCATION' titlecontent={[this.props.navigation.getParam("destination", "N/A")]}/>
                            <CardComponent title='TIMES'
                                titlecontent={['Dispatched: ','First Arrival: ', 'Closed: ']}/>
                            <CardComponent title='HEADLINE' titlecontent={['ORANGE 1- ']}/>
                            <CardComponent title='CROSS STREETS' titlecontent={['X-STREET 1 - Collow RD', 'X-STREET 1 - SELWYN AVE']}/>
                            <CardComponent title='CALLER INFO' titlecontent={['Source: ', 'Name', 'Address', 'Number']}/>
                    </ScrollView>
                    <ButtonComponent onPress={this.goToTop} isBackToTop={true}/>
            <ButtonComponent title='Assign job' onPress={this.goToTop}/>
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
