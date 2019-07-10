import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { Button} from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
import { Ionicons } from '@expo/vector-icons'; 
import HeaderComponent from '../../components/customHeaderComponent';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between'}}>
                <HeaderComponent title='Settings'/>


                <View>
                    <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                        <SettingsList.Item 
                            title='General'
                            onPress={() => this.props.navigation.navigate('General')}
                            />
                        <SettingsList.Item 
                            title='Map'
                            onPress={() => Alert.alert('Route To Map Settings Page')}
                            />
                        <SettingsList.Item 
                            title='Caching'
                            onPress={() => Alert.alert('Route To Caching Settings Pag')}
                            />
                    </SettingsList>
                </View>
                <View>
                    <Button
                        buttonStyle={styles.emergencyButton}
                        icon={<Ionicons name="ios-warning" size={50} color="white"/>}
                        onPress={() => this.props.navigation.navigate('Login')}
                        title="10-10 EMERGENCY"
                        />
                </View>
                <View>
                    <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                        <SettingsList.Item 
                            title='Reset Application'
                            onPress={() => Alert.alert('Route To General Page')}
                            />
                        <SettingsList.Item 
                            title='About App'
                            onPress={() => this.props.navigation.navigate('About')}
                            />

                    </SettingsList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    emergencyButton: {
        flexDirection: 'column',
        backgroundColor: 'red',
        borderRadius: 5,
        height: 100,
        marginHorizontal: 10,
      },
});