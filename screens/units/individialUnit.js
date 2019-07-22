import React, { Component } from "react";
import { View, Text, ScrollView, Button } from 'react-native';
import styles from '../../styles/style';
import unitStyles from './style'
import HeaderComponent from '../../components/customHeaderComponent';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import UnitMessagingComponent from '../../components/customUnitMessagingComponent';

export default class IndividualUnit extends Component {
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
          title: params.title || 'Unit',
          headerTitleStyle: styles.header,
          headerRight: (<View />),
        };
      }

    renderTabContent = (index) => {
        if (index === 0){
            return  <ScrollView>
                        <View style={unitStyles.unitCenterContainer}>
                            <CardComponent title='PERSONNEL'
                                titlecontent={['Name: ','UserID: ']}/>
                            <CardComponent title='LOCATION'/>
                            <CardComponent title='DEVICES' leftbottom='N/A'/>
                            <CardComponent title='VEHICLES' leftbottom='N/A'/>
                            <CardComponent title='EQUIPMENT' leftbottom='N/A'/>
                        </View>
                    </ScrollView>
        }
        else {
            return <UnitMessagingComponent/>
        }
    }

    render() {
        return (
            <View style={styles.containerView}>
                <SegmentControlComponent paramvalues={['INFO', 'MESSAGE']} 
                    tabAction={this.setIndex}
                />
                {this.renderTabContent(this.state.selectedIndex)}
            </View>
        );
    }
}

