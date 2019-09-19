import React, { Component } from 'react';
import { View, Text, Dimensions, Linking, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'
import { SimpleLineIcons } from '@expo/vector-icons';

class OnDutyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onDutyUser: GLOBAL.onDuty[0]
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      styles = getStyleSheet(GLOBAL.darkState);
      this.forceUpdate()
    });
    const msg = this.props.navigation.getParam("msg")
    if (msg.includes('1234567')){
      this.setState({onDutyUser: GLOBAL.onDuty[0]})
    }
    else {
      this.setState({onDutyUser: GLOBAL.onDuty[1]})
    }
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  static navigationOptions = ({ navigation }) => {
    const { state: { params = {} } } = navigation;
    return {
      title: 'Summary',
      headerTitleStyle: styles.header,
      headerStyle: styles.header,
      headerTintColor: styles.headerText.color,
      headerRight: <View />
    };
  };

  pressCall=()=>{
    const iosPhone=`tel://+${this.state.onDutyUser.phone}`
    const androidPhone= `tel:+${this.state.onDutyUser.phone}`
    const url = Platform.OS === 'ios' ? iosPhone : androidPhone
    Linking.openURL(url)
  }

  render() {
    let {height, width} = Dimensions.get('window');
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button buttonStyle={{width:width/2 - 10, margin: 5, backgroundColor: '#0076FF'}}
                onPress={() => this.props.navigation.navigate('Login')}
                title="Bookmark"
                />
            <Button buttonStyle={{width: width/2-10, margin: 5, backgroundColor: '#0076FF'}}
                onPress={() => this.props.navigation.navigate('Login')}
                title="Take Action"
                />
                
            </View>
            <View>
                <Text style={{fontSize:30}}> PRN: {this.state.onDutyUser.prn}</Text> 
                <Text style={{fontSize: 30}}> {this.state.onDutyUser.name}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <SimpleLineIcons name='user' size={75} style={{margin: 10}}></SimpleLineIcons>
                <View>
                <Text style={{fontSize: 17}}>{this.state.onDutyUser.address}</Text>
                <Text style={{fontSize: 17}}>0614 (Bail Address)</Text>
                <Text style={{fontSize: 17}}>{this.state.onDutyUser.dob} ({this.state.onDutyUser.age})</Text>
                <Text style={{fontSize: 17}}>{this.state.onDutyUser.licence}</Text>
                </View>
            </View>
            <View style={{padding: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 22, paddingLeft: 10, borderTopWidth: 2, paddingTop: 5, backgroundColor: '#D3D3D3'}}>Description and Information</Text>
                <Text style={{fontSize: 17}}>Phone</Text>
                <TouchableOpacity onPress={this.pressCall}>
                <Text style={{color: 'grey', fontSize: 17, borderBottomWidth: 1}}>{this.state.onDutyUser.phone} {"\n"}{"\n"}</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 17}}>Drivers Licence</Text>
                <Text style={{color: 'grey', fontSize: 17}}>{this.state.onDutyUser.licence} Current, Exp: 12/02/2024 {"\n"}{"\n"}</Text>
                <Text style={{color: 'grey', fontSize: 17}}>Class 2/F Medium Rigid Vehicles,
                    Full (Requalify), ISS: 17/06/2010 {"\n"}
                    Exp: 12/02/2024 {"\n"}
                    Class 1/F Motor Car, Light Motor Vehicle, Full, ISS: 08/09/1985 {"\n"}
                    Exp: 12/02/2024 {"\n"}
                    Licence Endorsement: F-Forklift, ISS: 21/04/2010 {"\n"}
                    Exp: 12/02/2024
                </Text>
            </View>
        </ScrollView>
        );
    }
}

export default OnDutyScreen;
