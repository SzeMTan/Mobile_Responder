import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderComponent from "../../components/customHeaderComponent";
import Accordion from "../../components/customAccordianComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

export default class JobFilter extends Component {

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

  constructor(props) {
    super(props);
    this.state = {
      priority: [
        { title: "P0", selected: true },
        { title: "P1", selected: false },
        { title: "P2", selected: false },
        { title: "P3", selected: false },
        { title: "P4", selected: false },
        { title: "P5", selected: false },
        { title: "P6", selected: false },
        { title: "P7", selected: false },
        { title: "P8", selected: false },
        { title: "P9", selected: false }
      ],
      dGroups: [
        { title: "AA", selected: false },
        { title: "AC", selected: false },
        { title: "AN", selected: false },
        { title: "AS", selected: false },
        { title: "AW", selected: false }
      ]
    };
  }
  static navigationOptions = ({ navigation }) => {
    const {
      state: { params = {} }
    } = navigation;
    return {
      header: null
    };
  };

  cancel = () => {
    this.props.navigation.goBack();
  };

  done = () => {
    stateCopy = {priority: [], dGroups:[]}
    this.state.priority.filter(priority => priority.selected).map(priority => stateCopy.priority.push(priority.title))
    this.state.dGroups.filter(group => group.selected).map(group => stateCopy.dGroups.push(group.title))
    
    {stateCopy.priority.length == 0 && stateCopy.dGroups.length == 0 ? stateCopy =[] : stateCopy=stateCopy}
    this.props.navigation.state.params.jobFilter(stateCopy);
    this.props.navigation.goBack();
  };

  filterSelected(accordionType, i) {
    {
      accordionType == "priority"
        ? ((stateCopy = Object.assign({}, this.state)),
          (stateCopy.priority = stateCopy.priority.slice()),
          (stateCopy.priority[i] = Object.assign({}, stateCopy.priority[i])),
          (stateCopy.priority[i].selected = !stateCopy.priority[i].selected),
          this.setState(stateCopy))
        : ((stateCopy = Object.assign({}, this.state)),
          (stateCopy.dGroups = stateCopy.dGroups.slice()),
          (stateCopy.dGroups[i] = Object.assign({}, stateCopy.dGroups[i])),
          (stateCopy.dGroups[i].selected = !stateCopy.dGroups[i].selected),
          this.setState(stateCopy));
    }
  }

  render() {
    return (
      <View style={[styles.appbackground, styles.containerView]}>
        <HeaderComponent
          title="Job Filter"
          filter={true}
          done={this.done}
          cancel={this.cancel}
        />
        <Accordion
          title={() =>
            this.renderAccordionTitle(this.state.priority, "Priority")
          }
          content={() =>
            this.renderAccordionContent(this.state.priority, "priority")
          }
        />
        <Accordion
          title={() => this.renderAccordionTitle(this.state.dGroups, "DGroups")}
          content={() =>
            this.renderAccordionContent(this.state.dGroups, "dGroups")
          }
        />
      </View>
    );
  }

  renderAccordionTitle(content, title) {
    const selectedOptions = content
      .filter(filterType => filterType.selected)
      .map((filterType, index) => (
        
        <View
          key={index}
          style={[{
            borderColor: styles.box.borderColor,
            borderWidth: 2,
            borderRadius: 13,
            marginHorizontal: 5,
            paddingHorizontal: 5
          }]}
        >
          <Text style={styles.accordianText}>{filterType.title}</Text>
        </View>
      ));
    return (
      <View style={styles.accordionTitleRow}>
        <Text style={styles.title}>{title}</Text>
        {selectedOptions}
      </View>
    );
  }

  renderAccordionContent(content, accordionType) {
    const filter = content.map((filterType, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => this.filterSelected(accordionType, index)}
      >
        <View style={styles.box}>
          {filterType.selected && (
            <MaterialCommunityIcons
              style={{ position: "absolute", top: 0, left: 0 }}
              name="checkbox-marked-circle-outline"
              size={20}
              color="green"
            />
          )}
          <Text style={styles.accordianText}>{filterType.title}</Text>
        </View>
      </TouchableOpacity>
    ));
    return <View style={styles.contentRow}>{filter}</View>;
  }
}

