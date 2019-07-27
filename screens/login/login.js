import React, { Component } from "react";
import {Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
// import styles from './style'
// import styles from '../../styles/style'
import { Button } from 'react-native-elements'
import ToggleComponent from "../../components/customToggleComponent";
import TextInputComponent from "../../components/customTextInputComponent";
import ButtonComponent from "../../components/customButtonComponent";
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class LoginScreen extends Component {

    render() {
        return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
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
                    <ToggleComponent toggleLabel='Remember Me'/>
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
        console.log(GLOBAL.darkState)
      }
}