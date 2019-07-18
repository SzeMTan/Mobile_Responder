import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static defaultProps = {
    title: "default text",
  }
  render() {
    const { title, onPress} = this.props;
    return (
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => onPress()}>
         <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}


  const styles = StyleSheet.create({
    textStyle: {
      fontSize:15,
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: "bold"
    },
    buttonStyle: {
      padding:10,
      backgroundColor: '#202646',
      borderRadius:5    
    },
  });

export default ButtonComponent;


