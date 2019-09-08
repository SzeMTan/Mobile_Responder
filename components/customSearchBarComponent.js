import React, { Component } from "react";
import { SearchBar } from 'react-native-elements';
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

export default class SearchBarComponent extends Component {

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    const { search } = this.state;

    return (
      <SearchBar
        lightTheme
        containerStyle={{ flex: 1 }}
        placeholder="Type Here.."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
