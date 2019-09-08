import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground
} from "react-native";
import { FileSystem, MediaLibrary, Permissions } from "expo";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import GLOBAL from '../../global'
import getStyleSheet from '../../styles/style'

const PHOTOS_DIR = FileSystem.documentDirectory + "photos";

export default class GalleryScreen extends React.Component {
  state = {
    images: {},
    photos: []
  };


  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos });
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      styles = getStyleSheet(GLOBAL.darkState);
      this.forceUpdate()
    });
  };

  sendImage = () => {
    fileName = this.state.photos[this.state.photos.length - 1];
    const uri = `${PHOTOS_DIR}/${fileName}`;
    this.props.sendButtonPressed(uri);
  };

  deleteImages = () => {
    for (i = 0; i < this.state.photos.length; i++) {
      fileName = this.state.photos[i];
      uri = `${PHOTOS_DIR}/${fileName}`;
      FileSystem.deleteAsync(uri);
    }
  };

  renderPhoto = fileName => {
    const uri = `${PHOTOS_DIR}/${fileName}`;
    return (
      <ImageBackground
        style={styles.imageBackgroundContainer}
        source={{ uri }}
      >
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.props.backButtonPressed}>
            <MaterialIcons name="arrow-back" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={this.deleteImages}
          >
            <SimpleLineIcons name="reload" size={40} color="white" />
            <Text style={styles.whiteText}>Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={this.sendImage}
          >
            <MaterialIcons name="send" size={40} color="white" />
            <Text style={styles.whiteText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  render() {
    return (
      <View style={styles.containerView}>
        {this.renderPhoto(this.state.photos[this.state.photos.length - 1])}
      </View>
    );
  }
}
