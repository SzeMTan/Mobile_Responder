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
                  <Text style={styles.logoText}>Intergraph {"\n"}
                  Mobile Responder</Text>
                  <View style={styles.loginFormInputs}>
                    <TextInput 
                    placeholder="QID" 
                    placeholderColor="#c4c3cb" 
                    style={styles.loginFormTextInput} />
                    <TextInput 
                    placeholder="Callsign" 
                    placeholderColor="#c4c3cb" 
                    style={styles.loginFormTextInput} />
                    <TextInput 
                    placeholder="Password" 
                    placeholderColor="#c4c3cb" 
                    style={styles.loginFormTextInput} 
                    secureTextEntry={true}/>
                    </View>
                    <Button
                    buttonStyle={styles.loginButton}
                    onPress={() => this.onLoginPress()}
                    title="Login"
                    />
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