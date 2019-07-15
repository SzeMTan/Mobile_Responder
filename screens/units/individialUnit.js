import React, { Component } from "react";
import { View, Text, ScrollView, Button } from 'react-native';
import styles from '../../styles/style';
import HeaderComponent from '../../components/customHeaderComponent';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import { GiftedChat } from 'react-native-gifted-chat'

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

    renderTabContent = (index) => {
        if (index === 0){
            return  <ScrollView>
                        <View style={{flex:1,justifyContent:'center'}}>
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
            return <ScrollView>
                        <CardComponent title='Messages'/>
                    </ScrollView>
        }
    }

    static navigationOptions = ({ navigation }) => {
        const { state: { params = {} } } = navigation;
        return {
          title: params.title || 'Unit',
          headerTitleStyle: styles.header,
          headerRight: (<View />),
        };
      }

    render() {
        return (
            <View>
                <SegmentControlComponent paramvalues={['INFO', 'MESSAGE']} 
                    tabAction={this.setIndex}
                />
                {this.renderTabContent(this.state.selectedIndex)}
            </View>
        );
    }
}

