import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import styles from '../styles/style'

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static defaultProps = {
    title: "",
    isBackToTop: false,
    style: styles.button
  }

  render() {
    const { title, onPress, isBackToTop, icon, style} = this.props;
    return (
      <Button buttonStyle={isBackToTop ? styles.iconButtonStyle : style }
      icon={icon}
      onPress={onPress}
      title={isBackToTop ? null : title}>
      </Button>
    );
  }
}

export default ButtonComponent;


