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
import GalleryScreen from "./image";
import isIPhoneX from "react-native-is-iphonex";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./cameraStyle";
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
      <Text style={styles.cameraFontColor}>
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
      <View style={styles.generalContainer}>
        <TouchableOpacity
          onPress={this.takePicture}
          style={styles.takePicture}
        >
          <Ionicons name="ios-radio-button-on" size={70} color="white" />
        </TouchableOpacity>
      </View>
    </View>;

  renderCamera = () =>
    <View style={styles.generalContainer>}>
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
      <View style={styles.cameraContainer}>
        {content}
      </View>
    );
  }
}
