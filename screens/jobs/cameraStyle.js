import { StyleSheet } from "react-native";
import { Constants } from "expo";
import isIPhoneX from "react-native-is-iphonex";

export default (cameraStyles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: 'black'
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
  cameraFontColor: {
    color: "white"
  },
  generalContainer: {
    flex: 1
  },
  takePicture: {
    alignSelf: "center"
  }
}));
