import React, { Component } from "react";
import { ScrollView, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SearchBarComponent from '../../components/customSearchBarComponent';
import CardComponent from '../../components/customCardComponent';
export default class UnitsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  static navigationOptions = ({ navigation }) => {
    const { state: { params = {} } } = navigation;
    return {
      header: (
        <HeaderComponent title={'Units('+navigation.getParam('unitsListSize')+')'}/>
      ),
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ unitsListSize: this._UnitsListSize()});
  }

  _UnitsListSize = () => {
    return this.state.data.length;
  };

  render() {
    const cards = this.state.data.map(
      unit =>         
        <TouchableOpacity key={unit.title} onPress={() => 
        this.props.navigation.navigate('IndividualUnit', {id: 1, title: unit.title})}>
          <CardComponent key={unit.title} 
          title={unit.title} 
          titlecontent={[unit.code, unit.destination]}
          leftbottom={unit.id} rightbottom={unit.status}
          />
        </TouchableOpacity>
      )
    return (
        <View>
            <SearchBarComponent title='Units'/>
            <ScrollView >
              <View style={{flex:1,justifyContent:'center'}}>
                {cards}
              </View>
            </ScrollView>
        </View>
    );
  }
}
