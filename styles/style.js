import {StyleSheet} from "react-native"
import { Constants } from "expo";
import isIPhoneX from "react-native-is-iphonex";

const buttonStyles = {
    padding:10,
    borderRadius:10,  
    height:45,
    margin:10
}

const iconButtonStyle = {
  position: 'absolute',
  width: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  right: 20,
  bottom: 25,
  borderRadius:25,
}

const header = {
  fontSize: 24,
  fontWeight: 'normal',
  textAlign: 'center',
}


export default function getStyleSheet(useDarkTheme){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}

const lightStyleSheet = StyleSheet.create({
    appbackground: {
        backgroundColor: 'white'
    },
    button: {
        // backgroundColor: '#0076FF', // default ios button blue 
        ...buttonStyles,
        backgroundColor: 'green',
    },
    iconButtonStyle: {
      ...iconButtonStyle,
        backgroundColor: '#0076FF',
    },
    containerView: {
        flex: 1,
    },
    header:{
        ...header,
        backgroundColor: '#0076FF',
        color : 'white'
      },
    headerText:{
        color : 'white',
    },
    rootContainer: {
          backgroundColor: '#8FC1E3',
      },
    segmentedControlTab: {
        marginHorizontal: 10,
        marginTop: 5
    },
    card: {
        backgroundColor: '#F7F9FB'
    },
    cardAction: {        
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cardContent: { 
        flex: 1, 
        textAlign: "right", 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    sliderContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginHorizontal: '5%',
        paddingVertical: 15,
        paddingHorizontal:30
    },
    sliderTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toggleSwitchContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginHorizontal: '5%',
        paddingVertical: 15,
        paddingHorizontal:30
    },

    //camera
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
    },

    // image
    imageBackgroundContainer: {
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
    },

    // home
    endJob: {
        backgroundColor: 'green',
        borderRadius: 5,
        marginHorizontal: 10,
      },
      horizonalLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginHorizontal:10
      },



    // job
    jobEndContainer: {
    justifyContent:'flex-end',
    },
    jobCenterContainer: {
        justifyContent:'center',
    },



    // login
    logoText: {
        fontSize: 35,
        fontWeight: "800",
        marginBottom:60,
        textAlign: 'left',
      },
      loginFormView: {
        paddingHorizontal:20,
        justifyContent:'center'
      },
      loginFormTextInput: {
        height: 45,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginHorizontal: 15,
        marginVertical: 5
      },
      changePassword: {
          color: '#0a84ff',
          textAlign: 'center'
      },



      // map
      mapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      paragraph: {
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
      },
      map: {
        flex:1,
        alignSelf: 'stretch',
      },
      marker: {
        width: 25,
        height: 25
      },



      // settings
      emergencyButton: {
        flexDirection: 'column',
        backgroundColor: 'red',
        height: 100,
        marginHorizontal: 10,
      },
      settingsContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      },


      // units
      unitEndContainer: {
        flex: 1,
        justifyContent:'flex-end',
    },
    unitCenterContainer: {
        justifyContent:'center',
    },

    reorderCardContainer: {
        padding: 0, 
        marginVertical: 0, 
        flexDirection: "row-reverse"
    },
    reorderCardTouch: {
        flex: 1,
        padding: 10,
    },
    reorderCardRotation: {
        flexDirection: "row-reverse",
        alignItems: "center",
    },
    messageInputContainer: {
        flexDirection: "row", 
        padding: 0, 
        margin: 0
    },
    messagingTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#fafafa",
        paddingLeft: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5
    },
    commentButton: {
        color: "#0084ff",
        fontWeight: "600",
        fontSize: 17,
        backgroundColor: "transparent",
        marginTop: 10,
        marginBottom: 5
    },
    cameraTouch: {
        height: 30,
        width: 30,
        marginLeft: 10
    },
    commentCardContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    commentCardAuthorContainer: {
        paddingLeft: 10, 
        paddingTop: 10
    },
    commentCardAuthorText: {
        fontSize: 18, 
        fontWeight: "bold"
    },
    commentCardTopLevelContainer: {
        marginVertical: 0, 
        padding: 0
    },
    pinContainer: { 
        margin: 0, 
        padding: 0 
    },
    commentCardImageTopLevel: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    commentCardImageSecondaryLevel: {
        flex: 1,
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    commentCardImageThirdLevel: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        resizeMode: "contain"
    },
    commentCardFontContainer: {
        paddingLeft: 10
    },
    commentCardFontSize: {
        fontSize: 18    
    },
    commentCardDateContainer: {
        paddingLeft: 10, 
        paddingBottom: 10
    },
    commentCardDate: {
        fontStyle: "italic"   
    },
    
});


const darkStyleSheet = StyleSheet.create({
    appbackground: {
        backgroundColor: '#002060'
    },
    button: {
      ...buttonStyles,
        backgroundColor: '#0076FF', // default ios button blue 
    },
    iconButtonStyle: {
        ...iconButtonStyle,
        backgroundColor: '#0076FF',
    },
    containerView: {
        flex: 1,
    },
    header:{
        ...header,
        backgroundColor: '#0076FF',
        color : 'white'
      },
    headerText:{
        color : 'white',
    },
    rootContainer: {
          backgroundColor: '#8FC1E3',
      },
    segmentedControlTab: {
        marginHorizontal: 10,
        marginTop: 5
    },
    card: {
        backgroundColor: '#F7F9FB'
    },
    cardAction: {        
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cardContent: { 
        flex: 1, 
        textAlign: "right", 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    sliderContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginHorizontal: '5%',
        paddingVertical: 15,
        paddingHorizontal:30
    },
    sliderTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toggleSwitchContainer: {
        backgroundColor: '#002060',
        color:'white',
        justifyContent: 'center',
        marginHorizontal: '5%',
        paddingVertical: 15,
        paddingHorizontal:30
    },
    reorderCardContainer: {
        padding: 0, 
        marginVertical: 0, 
        flexDirection: "row-reverse"
    },
    reorderCardTouch: {
        flex: 1,
        padding: 10,
    },
    reorderCardRotation: {
        flexDirection: "row-reverse",
        alignItems: "center",
    },
    messageInputContainer: {
        flexDirection: "row", 
        padding: 0, 
        margin: 0
    },
    messagingTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#fafafa",
        paddingLeft: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5
    },
    commentButton: {
        color: "#0084ff",
        fontWeight: "600",
        fontSize: 17,
        backgroundColor: "transparent",
        marginTop: 10,
        marginBottom: 5
    },
    cameraTouch: {
        height: 30,
        width: 30,
        marginLeft: 10
    },
    commentCardContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    commentCardAuthorContainer: {
        paddingLeft: 10, 
        paddingTop: 10
    },
    commentCardAuthorText: {
        fontSize: 18, 
        fontWeight: "bold"
    },
    commentCardTopLevelContainer: {
        marginVertical: 0, 
        padding: 0
    },
    pinContainer: { 
        margin: 0, 
        padding: 0 
    },
    commentCardImageTopLevel: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    commentCardImageSecondaryLevel: {
        flex: 1,
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    commentCardImageThirdLevel: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        resizeMode: "contain"
    },
    commentCardFontContainer: {
        paddingLeft: 10
    },
    commentCardFontSize: {
        fontSize: 18    
    },
    commentCardDateContainer: {
        paddingLeft: 10, 
        paddingBottom: 10
    },
    commentCardDate: {
        fontStyle: "italic"   
    },

    // camera
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
    },

    // image
    imageBackgroundContainer: {
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
    },
    // home
    endJob: {
        backgroundColor: 'green',
        borderRadius: 5,
        marginHorizontal: 10,
      },
      horizonalLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginHorizontal:10
      },



    // job
    jobEndContainer: {
    justifyContent:'flex-end',
    },
    jobCenterContainer: {
        justifyContent:'center',
    },



    // login
    logoText: {
        fontSize: 35,
        fontWeight: "800",
        marginBottom:60,
        textAlign: 'left',
        color: 'white'
      },
      loginFormView: {
        paddingHorizontal:20,
        justifyContent:'center'
      },
      loginFormTextInput: {
        height: 45,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginHorizontal: 15,
        marginVertical: 5
      },
      changePassword: {
          color: '#0a84ff',
          textAlign: 'center'
      },



      // map
      mapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      paragraph: {
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
      },
      map: {
        flex:1,
        alignSelf: 'stretch',
      },
      marker: {
        width: 25,
        height: 25
      },



      // settings
      emergencyButton: {
        flexDirection: 'column',
        backgroundColor: 'red',
        height: 100,
        marginHorizontal: 10,
      },
      settingsContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      },


      // units
      unitEndContainer: {
        flex: 1,
        justifyContent:'flex-end',
    },
    unitCenterContainer: {
        justifyContent:'center',
    }
});