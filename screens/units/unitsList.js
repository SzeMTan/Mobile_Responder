import React, { Component } from "react";
import { ScrollView, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SearchBarComponent from '../../components/customSearchBarComponent';
import CardComponent from '../../components/customCardComponent';
// import styles from '../../styles/style'
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class UnitsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return GLOBAL.units.length;
  };

  render() {
    const cards = GLOBAL.units.map(
      unit =>         
        <TouchableOpacity key={unit.title} onPress={() => 
        this.props.navigation.navigate('IndividualUnit', {id: 1, title: unit.title, latlng: unit.latlng})}>
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
              <View style={styles.unitCenterContainer}>
                {cards}
              </View>
            </ScrollView>
        </View>
    );
  }
}
