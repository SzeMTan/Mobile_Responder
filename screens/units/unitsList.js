import React, { Component } from "react";
import { ScrollView, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import CardComponent from '../../components/customCardComponent';
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

styles = getStyleSheet(GLOBAL.darkState);

export default class UnitsList extends Component {

  componentWillMount() {
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
    styles = getStyleSheet(GLOBAL.darkState);
    const cards = GLOBAL.units.map(
      (unit, index) =>         
        <TouchableOpacity key={unit.title} onPress={() => 
        this.props.navigation.navigate('IndividualUnit', {id: index, title: unit.title, latlng: unit.latlng, destination: unit.destination})}>
          <CardComponent key={unit.title} 
          title={unit.title} 
          titlecontent={[unit.code, unit.destination]}
          leftbottom={unit.id} rightbottom={unit.status}
          />
        </TouchableOpacity>
      )
    return (
        <View style={[styles.containerView, styles.appbackground]}>
            <ScrollView >
              <View style={styles.unitCenterContainer}>
                {cards}
              </View>
            </ScrollView>
        </View>
    );
  }
}
