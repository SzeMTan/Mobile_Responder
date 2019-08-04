import { Constants } from "expo";
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
import isIPhoneX from "react-native-is-iphonex";
import styles from "./imageStyle";

const PHOTOS_DIR = FileSystem.documentDirectory + "photos";

export default class GalleryScreen extends React.Component {
  state = {
    images: {},
    photos: []
  };

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos });
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
      console.log("deleting " + uri);
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
            // onPress={this.props.onPress}
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
      <View style={styles.container}>
        {this.renderPhoto(this.state.photos[this.state.photos.length - 1])}
      </View>
    );
  }
}
