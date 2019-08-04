import { StyleSheet } from "react-native";

export default (jobStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackgroundContainer: {
    flex: 1,
    justifyContent: "space-between"
  }
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
    justifyContent: "space-around",
    flex: 0.12,
    flexDirection: "row"
  },
  whiteText: {
    color: "white"
  },
  bottomButton: {
    // flex: 0.3,
    height: 58,
    justifyContent: "center",
    alignItems: "center"
  }
}));
