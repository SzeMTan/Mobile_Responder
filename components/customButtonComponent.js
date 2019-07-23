import React, { Component } from 'react';
import { Button } from 'react-native-ui-kitten';
import styles from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native'

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static defaultProps = {
    title: "",
    isIcon: false,
    style: styles.button
  }

  render() {
    const { title, onPress, isIcon, style} = this.props;
    return (
      <Button buttonStyle={isIcon ? styles.iconButtonStyle : [styles.button, style] } onPress={onPress}>
         <Ionicons name="ios-arrow-up" size={30} color="#fff" />
         {/* {title} */}
      </Button>
    );
  }
}

export default ButtonComponent;
 

