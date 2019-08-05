import React, { Component } from "react";
import { Alert, StyleSheet, View } from 'react-native';
import { Button} from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
import { Ionicons } from '@expo/vector-icons'; 
import ButtonComponent from "../../components/customButtonComponent";
// import styles from '../../styles/style'
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'
import { withNavigation } from "react-navigation";

styles = getStyleSheet(GLOBAL.darkState);

class SettingsScreen extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            console.log('mounting settings screen')
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
            <View style={[styles.settingsContainer, styles.appbackground]}>
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
                            onPress={() => Alert.alert('Route To Caching Settings Page')}
                            />
                    </SettingsList>
                </View>
                <View>
                    <ButtonComponent
                        style={styles.emergencyButton}
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


export default withNavigation(SettingsScreen);