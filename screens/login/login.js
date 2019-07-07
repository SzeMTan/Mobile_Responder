import React, { Component } from "react";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Button, StyleSheet} from 'react-native';
import styles from './style'
import ToggleComponent from "../../components/toggleComponent";

export default class LoginScreen extends Component {
    render() {
        return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                  <View style={styles.loginFormView}>
                    <Text style={styles.logoText}>Responder</Text>
                    <TextInput 
                    placeholder="QID" 
                    placeholderColor="#c4c3cb" 
                    style={styles.loginFormTextInput} />
                    <TextInput 
                    placeholder="Callsign" 
                    placeholderColor="#c4c3cb" 
                    style={styles.loginFormTextInput} />
                    <TextInput 
                    placeholder="Not a Password" 
                    placeholderColor="#c4c3cb" 
                    style={styles.loginFormTextInput} 
                    secureTextEntry={true}/>
                    <Button
                    buttonStyle={styles.loginButton}
                    onPress={() => this.onLoginPress()}
                    title="Login"
                    />
                    <ToggleComponent toggleLabel='Remember Me'/>
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