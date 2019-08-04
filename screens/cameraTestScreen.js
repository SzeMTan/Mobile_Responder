import { Constants, Camera, FileSystem, Permissions } from "expo";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
  Platform
} from "react-native";
import GalleryScreen from "./GalleryScreen";
import isIPhoneX from "react-native-is-iphonex";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default class CameraScreen extends React.Component {
  state = {
    autoFocus: "on",
    type: "back",
    whiteBalance: "auto",
    ratio: "16:9",
    permissionsGranted: false,
    showGallery: false
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === "granted" });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "photos"
    ).catch(e => {
      console.log(e, "Directory exists");
    });
  }

  static navigationOptions = ({ navigation }) => {
    const { state: { params = {} } } = navigation;
    return {
      header: null
    };
  };

  toggleView = () => this.setState({ showGallery: !this.state.showGallery });

  backButtonPressed = () => this.props.navigation.goBack();

  sendButtonPressed = (uri) =>{
    this.props.navigation.state.params.send(uri)
    this.props.navigation.goBack();
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  handleMountError = ({ message }) => console.error(message);

  onPictureSaved = async photo => {
    await FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`
    });
    this.setState({ showGallery: true });
  };

  renderGallery() {
    return (
      <GalleryScreen
        onPress={this.toggleView.bind(this)}
        backButtonPressed={this.backButtonPressed.bind(this)}
        sendButtonPressed={this.sendButtonPressed.bind(this)}
      />
    );
  }

  renderNoPermissions = () =>
    <View style={styles.noPermissions}>
      <Text style={{ color: "white" }}>
        Camera permissions not granted - cannot open camera preview.
      </Text>
    </View>;

  renderTopBar = () =>
    <View style={styles.topBar}>
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack();
        }}
      >
        <MaterialIcons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>
    </View>;

  renderBottomBar = () =>
    <View style={styles.bottomBar}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={this.takePicture}
          style={{ alignSelf: "center" }}
        >
          <Ionicons name="ios-radio-button-on" size={70} color="white" />
        </TouchableOpacity>
      </View>
    </View>;

  renderCamera = () =>
    <View style={{ flex: 1 }}>
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.camera}
        ratio={this.state.ratio}
        onMountError={this.handleMountError}
      >
        {this.renderTopBar()}
        {this.renderBottomBar()}
      </Camera>
    </View>;

  render() {
    const cameraScreenContent = this.state.permissionsGranted
      ? this.renderCamera()
      : this.renderNoPermissions();
    const content = this.state.showGallery
      ? this.renderGallery()
      : cameraScreenContent;
    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  camera: {
    flex: 1,
    justifyContent: "space-between"
  },
  topBar: {
    flex: 0.2,
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight / 2
  },
  bottomBar: {
    paddingBottom: isIPhoneX ? 25 : 5,
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    flex: 0.12,
    flexDirection: "row"
  },
  noPermissions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
});
