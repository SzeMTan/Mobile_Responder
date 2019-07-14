import React, { Component } from "react";
import { View } from 'react-native';
import HeaderComponent from '../../components/customHeaderComponent';
import SearchBarComponent from '../../components/customSearchBarComponent';
export default class Units extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 10,
        };
      }
    render() {
        return (
            <View>
                <HeaderComponent title={'Units('+this.state.number+')'}/>
                <SearchBarComponent title='Units'/>
            </View>
        );
    }
}
