import React, { Component } from "react";
import {Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import loginStyles from './style'
import styles from '../../styles/style'
import { Button } from 'react-native-elements'
import ToggleComponent from "../../components/customToggleComponent";
import TextInputComponent from "../../components/customTextInputComponent";
import ButtonComponent from "../../components/customButtonComponent";



export default class LoginScreen extends Component {

    render() {
        return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.containerView}>
                  <View style={loginStyles.loginFormView}>
                  <Text style={loginStyles.logoText}>Intergraph {"\n"}
                  Mobile Responder</Text>
                  <View style={loginStyles.loginFormInputs}>
                    <TextInputComponent
                    placeholderText="QID"
                    style={loginStyles.loginFormTextInput} />
                    <TextInputComponent
                    placeholderText="Callsign"
                    style={loginStyles.loginFormTextInput}/>
                    <TextInputComponent
                    placeholderText="Password" 
                    secureEntry={true}
                    style={loginStyles.loginFormTextInput}/>
                    </View>
                    <ButtonComponent title='Login' onPress={() => this.onLoginPress()} />
                    <ToggleComponent toggleLabel='Remember Me'/>
                    <Text style={loginStyles.changePassword}
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