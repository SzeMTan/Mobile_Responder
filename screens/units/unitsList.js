import React, { Alert, Component } from "react";
import { ScrollView, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SearchBarComponent from '../../components/customSearchBarComponent';
import CardComponent from '../../components/customCardComponent';
export default class UnitsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 10,
      data: [{title: 'PBY',
              code: '3C-CRIME PREVENTION ADVICE',
              destination: '10 Waterloo Quadrant',
              id: 'P036986219',
              status: 'ARRIVED',
      },
    {
      title: 'ACY3',
              code: '3M-DIRECTED PATROL',
              destination: '10 Waterloo Quadrant',
              id: 'P036986219',
              status: 'ARRIVED',
    },
    {
      title: 'ACY1',
              code: '3M-DIRECTED PATROL',
              destination: '10 Waterloo Quadrant',
              id: 'P036986219',
              status: 'ARRIVED',
    }],
    };
  }
  render() {
    const cards = this.state.data.map(unit =>         
    <TouchableOpacity key={unit.title} onPress={() => 
    this.props.navigation.navigate('IndividualUnit', {id: 1, title: unit.title})}>
      <CardComponent key={unit.title} 
      title={unit.title} 
      titlecontent={[unit.code, unit.destination]}
      leftbottom={unit.id} rightbottom={unit.status}    
      onPress={() => {Alert.alert('hello')}}
      /></TouchableOpacity>)
    return (
        <View style={{flex:1}}>
            <HeaderComponent title={'Units('+this.state.number+')'}/>
            <View>
            <SearchBarComponent title='Units'/>
            </View>
            <ScrollView >
            <View style={{flex:1,justifyContent:'center'}}>
            {cards}
            </View>
            </ScrollView>
        </View>
    );
  }
}
