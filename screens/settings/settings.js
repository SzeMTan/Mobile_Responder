import React, { Component } from "react";
import { Alert, View } from 'react-native';
import SettingsList from 'react-native-settings-list';
import { Ionicons } from '@expo/vector-icons'; 
import ButtonComponent from "../../components/customButtonComponent";
import { withNavigation } from "react-navigation";
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

class SettingsScreen extends Component {

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
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
                    <SettingsList backgroundColor={styles.settingsChildren.backgroundColor} borderColor='#c8c7cc' defaultItemSize={50}>
                        <SettingsList.Item 
                            title='General'
                            onPress={() => this.props.navigation.navigate('General')}
                            titleStyle={styles.settingsChildren}
                            />
                        <SettingsList.Item 
                            title='Map'
                            onPress={() => Alert.alert('Route To Map Settings Page')}
                            titleStyle={styles.settingsChildren}
                            />
                        <SettingsList.Item 
                            title='Caching'
                            onPress={() => Alert.alert(
                                "Remove cache",
                                "Do you wish to remove cache?",
                                [
                                  {
                                    text: "No",
                                    onPress: () => console.log('caching no')
                                  },
                                  {
                                    text: "Yes",
                                    onPress: () => console.log('caching yes')
                                  }
                                ]
                              )}
                            titleStyle={styles.settingsChildren}
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
                    <SettingsList 
                    backgroundColor={styles.settingsChildren.backgroundColor} borderColor='#c8c7cc' defaultItemSize={50}>
                        <SettingsList.Item 
                            title='Reset Application'
                            onPress={() => Alert.alert(
                                "Reset application",
                                "Do you wish to reset your application",
                                [
                                    {
                                        text: "No",
                                        onPress: () => console.log('reset no')
                                      },
                                      {
                                    text: "Yes",
                                    onPress: () => console.log('reset yes')
                                  }                                  
                                ]
                              )}
                            titleStyle={styles.settingsChildren}
                            />
                        <SettingsList.Item 
                            title='About App'
                            onPress={() => Alert.alert(
                                "About App ",
                                "Jenny Lee & Sze-Meeng Tan Intergraph Mobile Responder Part 4 Project 2019")}
                            titleStyle={styles.settingsChildren}
                            />

                    </SettingsList>
                </View>
            </View>
        );
    }
}


export default withNavigation(SettingsScreen);