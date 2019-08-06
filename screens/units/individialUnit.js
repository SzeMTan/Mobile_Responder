import React, { Component } from "react";
import { View, Text, ScrollView, Button } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import UnitMessagingComponent from '../../components/customUnitMessagingComponent';
// import styles from '../../styles/style'
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

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
          headerStyle: styles.header,
          headerTintColor: 'white',
          headerRight: (<View />),
        };
      }

    renderTabContent = (index) => {
        if (index === 0){
            return  <ScrollView>
                        <View style={styles.unitCenterContainer}>
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

