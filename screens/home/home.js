import React, { Component } from "react";
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { Header, Text } from 'react-native-elements';
import SegmentControlComponent from '../../components/customSegmentControlComponent';
import CardComponent from '../../components/customCardComponent'
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
            return <ScrollView>
                        <CardComponent title='Current job: '/>
                        <Button
                        buttonStyle={styles.endJob}
                        onPress={() => this.props.navigation.navigate('Login')}
                        title="End Job ->"
                        />
                    </ScrollView>
        }
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'HOME', style: { fontSize:24 } }}
                    backgroundColor='none'
                />
                <View>
                <SegmentControlComponent paramvalues={['UNIT', 'JOB']} 
                    tabAction={this.setIndex}
                />
                {this.renderTabContent(this.state.selectedIndex)}
                </View>
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Logout"
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    endJob: {
        flexDirection: 'column',
        backgroundColor: 'red',
        borderRadius: 5,
        height: 100,
        marginHorizontal: 10,
      },
});
