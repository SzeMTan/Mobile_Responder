import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class TextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isFocused: false,
    };
  }

  static defaultProps = {
        placeholderText:"",
        secureEntry: false
  }

  handleFocus = () => this.setState({isFocused: true})

  handleBlur = () => this.setState({isFocused: false})

  render() {
    return (
      <TextInput style={[styles.loginFormTextInput, {borderColor: this.state.isFocused ? '#0a84ff' : '#eaeaea'}]}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholder={this.props.placeholderText}
        placeholderTextColor="#c4c3cb"
        secureTextEntry={this.props.secureEntry}
      />
    );
  }
}

const styles = StyleSheet.create({
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        // borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
      },
});



