import React, { Component } from "react";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Button} from 'react-native';
import styles from '../../styles/style'
import ToggleComponent from "../../components/customToggleComponent";
import TextInputComponent from "../../components/customTextInputComponent";
import ButtonComponent from "../../components/customButtonComponent";



export default class LoginScreen extends Component {

    render() {
        return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                  <View style={styles.loginFormView}>
                  <Text style={styles.logoText}>Intergraph {"\n"}
                  Mobile Responder</Text>
                  <View style={styles.loginFormInputs}>
                    {/* <TextInput 
                    placeholder="QID" 
                    placeholderColor="#c4c3cb" 
                    style={styles.loginFormTextInput} /> */}
                    <TextInputComponent
                    placeholderText="QID"/>
                    <TextInputComponent
                    placeholderText="Callsign"/>
                    <TextInputComponent
                    placeholderText="Password" 
                    secureEntry={true}/>
                    </View>
                    <View style={styles.buttonView}>
                    <ButtonComponent title="LOGIN" onPress={() => this.onLoginPress()}/>
                    </View>
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
      }
}