import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import { FileSystem, MediaLibrary, Permissions } from "expo";
import { MaterialIcons } from "@expo/vector-icons";

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

  sendImage = async () => {

    fileName = this.state.photos[this.state.photos.length - 1]
    const uri = `${PHOTOS_DIR}/${fileName}`;
    console.log(uri);
    console.log("in sendingImage ");
  };

  renderPhoto = fileName => {
    const uri = `${PHOTOS_DIR}/${fileName}`;
    return <Image style={{ flex: 1 }} source={{ uri }} />;
  };

  render() {
      console.log(this.state.photos)
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <MaterialIcons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.sendImage}>
            <Text style={styles.whiteText}>Save selected to gallery</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          {this.renderPhoto(this.state.photos[this.state.photos.length - 1])}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white"
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4630EB"
  },
  button: {
    padding: 20
  },
  whiteText: {
    color: "white"
  }
});
