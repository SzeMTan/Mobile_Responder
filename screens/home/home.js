import React, { Component } from "react";
import { ScrollView, View, Button } from 'react-native';
import { Text } from 'react-native-elements';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent';
import HeaderComponent from '../../components/customHeaderComponent';

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
          selectedIndex:0
        };
      }

    setIndex = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
          });
    }

    renderTabContent(index){
        if (index === 0){
            return  <ScrollView>
                        <CardComponent title='Unit STATUS CODE: '/>
                        <CardComponent title='Unit: '
                        titlecontent={['Name: ','QID: ', 'phone no: ', 'shift start: ', 'shift end:', 'radio no: ']}/>
                    </ScrollView>
        }
        else {
            return <Text> Tab two </Text>
        }
    }

    render() {
        return (
            <View>
                <HeaderComponent title='HOME'/>
                <View>
                <SegmentControlComponent paramvalues={['UNIT', 'JOB']} 
                    tabAction={this.setIndex}
                />
                {this.renderTabContent(this.state.selectedIndex)}
                </View>
                <Button
                    // buttonStyle={styles.loginButton}
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Logout"
                    />
            </View>
        );
    }


}
