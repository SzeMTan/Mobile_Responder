import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static defaultProps = {
    title: "",
    isBackToTop: false
  }

  renderBackToTop=() => {
    if(this.props.isBackToTop){
    return <Ionicons name="ios-arrow-up" size={30} color="#fff" />
    }
    else{
      return <Text style={styles.textStyle}>{this.props.title}</Text>
    }
  };

  render() {
    const { title, onPress, isBackToTop} = this.props;
    return (
        <TouchableOpacity style={isBackToTop ? styles.TouchableOpacityStyle : styles.buttonStyle }
        onPress={() => onPress()}>
         {this.renderBackToTop()}
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
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20,
      bottom: 55,
      backgroundColor: '#202646',
      borderRadius:25,
    },

  });

export default ButtonComponent;


