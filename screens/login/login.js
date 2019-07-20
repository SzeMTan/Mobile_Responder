import React, { Component } from "react";
import {Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import loginStyles from './style'
import { Button } from 'react-native-elements'
import ToggleComponent from "../../components/customToggleComponent";
import TextInputComponent from "../../components/customTextInputComponent";
import ButtonComponent from "../../components/customButtonComponent";



export default class LoginScreen extends Component {

    render() {
        return (
        <KeyboardAvoidingView style={loginStyles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={loginStyles.loginScreenContainer}>
                  <View style={loginStyles.loginFormView}>
                  <Text style={loginStyles.logoText}>Intergraph {"\n"}
                  Mobile Responder</Text>
                  <View style={loginStyles.loginFormInputs}>
                    <TextInputComponent
                    placeholderText="QID"/>
                    <TextInputComponent
                    placeholderText="Callsign"/>
                    <TextInputComponent
                    placeholderText="Password" 
                    secureEntry={true}/>
                    </View>
                    <View style={loginStyles.buttonView}>
                    <ButtonComponent title='Login' onPress={() => this.onLoginPress()} style={loginStyles.loginButton} />
                    </View>
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