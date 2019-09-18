import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

class OnDutyVehicle extends Component {

componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
        styles = getStyleSheet(GLOBAL.darkState);
        this.forceUpdate()
    });
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
render() {
    let {height, width} = Dimensions.get('window');
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button buttonStyle={{width:width/2 - 10, margin: 5, backgroundColor: 'grey'}}
                onPress={() => this.props.navigation.navigate('Login')}
                title="Bookmark"
                />
            <Button buttonStyle={{width: width/2-10, margin: 5, backgroundColor: '#0076FF'}}
                onPress={() => this.props.navigation.navigate('Login')}
                title="Take Action"
                />
                
            </View>
            <View>
                <Text style={{fontSize:30}}> Toyota Ractis </Text> 
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name='car-hatchback' size={75} style={{margin: 10}}></MaterialCommunityIcons>
                <View>
                <Text style={{fontSize: 17}}>Silver</Text>
                <Text style={{fontSize: 17}}>2005, hatchback</Text>
                <Text style={{fontSize: 17}}>ID: 564237534543</Text>
                <Text style={{borderWidth: 2, borderColor: 'black', fontSize:17, textAlign:'center', paddingLeft:5}}>HHK712</Text>
                </View>
            </View>
            <View style={{padding: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 22, paddingLeft: 10, borderTopWidth: 2, paddingTop: 5, backgroundColor: '#D3D3D3'}}>Description and Information</Text>
                <Text style={{fontSize: 17}}>Licence Expiry</Text>
                <Text style={{color: 'grey', fontSize: 17, borderBottomWidth: 1}}> 01/03/2020 {"\n"}</Text>
                <Text style={{fontSize: 17}}>WOF Expiry</Text>
                <Text style={{color: 'grey', fontSize: 17}}>04/05/20{"\n"}</Text>
                <Text style={{fontSize: 17}}>Reg. Owner</Text>
                <Text style={{color: 'grey', fontSize: 17}}>
                    PETERSON,Ben{"\n"}
                    Male{"\n"}
                    05/10/1987{"\n"}
                    450 Great South Road, Greenlane
                    </Text>

                <Text style={{fontWeight: 'bold', fontSize: 22, paddingLeft: 10, borderTopWidth: 2, paddingTop: 5, backgroundColor: '#D3D3D3'}}>Details</Text>
                <Text style={{fontSize: 17}}>Type</Text>
                <Text style={{color: 'grey', fontSize: 17, borderBottomWidth: 1}}> Car{"\n"}</Text>
                <Text style={{fontSize: 17}}>Make</Text>
                <Text style={{color: 'grey', fontSize: 17, borderBottomWidth: 1}}> Toyota{"\n"}</Text>
                <Text style={{fontSize: 17}}>Model</Text>
                <Text style={{color: 'grey', fontSize: 17, borderBottomWidth: 1}}> Ractis{"\n"}</Text>
                <Text style={{fontSize: 17}}>Year</Text>
                <Text style={{color: 'grey', fontSize: 17, borderBottomWidth: 1}}> 2005{"\n"}</Text>
                <Text style={{fontSize: 17}}>Style</Text>
                <Text style={{color: 'grey', fontSize: 17, borderBottomWidth: 1}}> Hatchback{"\n"}</Text>
                <Text style={{fontSize: 17}}>VIN</Text>
                <Text style={{color: 'grey', fontSize: 17, borderBottomWidth: 1}}> 564237534543{"\n"}</Text>
            </View>
        </ScrollView>
        );
    }
}

export default OnDutyVehicle;
