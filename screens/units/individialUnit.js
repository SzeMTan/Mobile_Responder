import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import SegmentControlComponent from "../../components/customSegmentControlComponent";
import CardComponent from "../../components/customCardComponent";
import UnitMessagingComponent from "../../components/customUnitMessagingComponent";
import GLOBAL from "../../global";
import getStyleSheet from "../../styles/style";

export default class IndividualUnit extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      styles = getStyleSheet(GLOBAL.darkState);
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      unit: GLOBAL.units[props.navigation.getParam("id")]
    };
  }

  setIndex = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };

  static navigationOptions = ({ navigation }) => {
    const {
      state: { params = {} }
    } = navigation;
    return {
      title: params.title || "Unit",
      headerTitleStyle: styles.header,
      headerStyle: styles.header,
      headerTintColor: styles.headerText.color,
      headerRight: <View />
    };
  };

  renderTabContent = index => {
    const { names, userids, numberPlate, equipment, title } = this.state.unit;
    if (index === 0) {
      return (
        <ScrollView>
          <View style={styles.unitCenterContainer}>
            <CardComponent
              title="PERSONNEL"
              titlecontent={["Names: " + names, "UserID: " + userids]}
            />
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Map", {
                  latlng: this.props.navigation.getParam("latlng")
                })
              }
            >
              <CardComponent
                title="LOCATION"
                titlecontent={[
                  this.props.navigation.getParam("destination", "N/A")
                ]}
              />
            </TouchableOpacity>
            <CardComponent title="VEHICLES" leftbottom={numberPlate} />
            <CardComponent title="EQUIPMENT" leftbottom={equipment} />
          </View>
        </ScrollView>
      );
    } else {
      return <UnitMessagingComponent name={title} />;
    }
  };

  render() {
    return (
      <View style={[styles.containerView, styles.appbackground]}>
        <SegmentControlComponent
          paramvalues={["INFO", "MESSAGE"]}
          tabAction={this.setIndex}
        />
        {this.renderTabContent(this.state.selectedIndex)}
      </View>
    );
  }
}
