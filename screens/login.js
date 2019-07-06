import React, { Component } from "react";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Button, StyleSheet} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.loginScreenContainer, styles.loginFormView ]}>
                <Text style={styles.logoText}>Mobile Responder</Text>
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
                    // onPress={() => this.onLoginPress()}
                    title="Login"
                    />
                </View>
            </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
      },
      loginScreenContainer: {
        flex: 1,
      },
      logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
      },
      loginFormView: {
        flex: 1
      },
      loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
      
      },
      loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        paddingHorizontal: 20
      }
});