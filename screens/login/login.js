import React, { Component } from "react";
import {Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import ToggleComponent from "../../components/customToggleComponent";
import TextInputComponent from "../../components/customTextInputComponent";
import ButtonComponent from "../../components/customButtonComponent";
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

styles = getStyleSheet(GLOBAL.darkState);

export default class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {
      switchValue: false
    }
  }
  componentWillMount() {
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
    render() {
        return (
        <KeyboardAvoidingView style={[styles.containerView, styles.appbackground]} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.containerView, styles.loginFormView]}>
                  <Text style={styles.logoText}>Intergraph {"\n"}
                  Mobile Responder</Text>
                  <View style={styles.loginFormView}>
                    <TextInputComponent
                    placeholderText="QID"
                    style={styles.loginFormTextInput} />
                    <TextInputComponent
                    placeholderText="Callsign"
                    style={styles.loginFormTextInput}/>
                    <TextInputComponent
                    placeholderText="Password" 
                    secureEntry={true}
                    style={styles.loginFormTextInput}/>
                    <ButtonComponent title='Login' onPress={() => this.onLoginPress()} />
                    <ToggleComponent toggleLabel='Remember Me' onToggle={switchValue => {this.setState({switchValue})}} toggleState={this.state.switchValue}/>
                    <Text style={styles.changePassword}
                    onPress={() => this.props.navigation.navigate('Password')}>
                      Change Password
                      </Text>
                 </View>
              </View>
            </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
        );
    }

    onLoginPress() {
        this.props.navigation.navigate('Home');
      }
}