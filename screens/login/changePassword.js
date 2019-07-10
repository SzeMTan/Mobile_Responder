import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ChangePasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
            <Text>This screen represents the link to allow the user to change their password</Text>
            <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Logout"
                    />
        </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});

export default ChangePasswordScreen;
