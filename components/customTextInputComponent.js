import React, { Component } from "react";
import { TextInput } from "react-native";

export default class TextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  static defaultProps = {
    placeholderText: "",
    secureEntry: false,
    multiline: false,
    numberOfLines: 1
  };

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { style } = this.props;
    return (
      <TextInput
        style={[
          style,
          { borderColor: this.state.isFocused ? "#0a84ff" : "#eaeaea" }
        ]}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholder={this.props.placeholderText}
        placeholderTextColor="#c4c3cb"
        secureTextEntry={this.props.secureEntry}
        multiline={this.props.multiline}
      />
    );
  }
}
