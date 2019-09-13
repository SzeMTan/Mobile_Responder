import React, { Component } from "react";
import { Button } from "react-native-elements";
import GLOBAL from "../global";
import getStyleSheet from "../styles/style";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    title: "",
    isBackToTop: false,
    disabled: false
  };

  render() {
    styles = getStyleSheet(GLOBAL.darkState);
    const { title, onPress, isBackToTop, icon, style } = this.props;
    return (
      <Button
        buttonStyle={
          isBackToTop ? styles.iconButtonStyle : [styles.button, style]
        }
        icon={icon}
        onPress={onPress}
        title={isBackToTop ? null : title}
        disabled={this.props.disabled}
      ></Button>
    );
  }
}

export default ButtonComponent;
