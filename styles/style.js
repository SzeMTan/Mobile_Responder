import {StyleSheet} from "react-native"
import { Constants } from "expo";
import isIPhoneX from "react-native-is-iphonex";

const darkThemeTextColor='white'

const darkThemeBackgroundColor = '#002060'

const iphoneBlue = '#0076FF'

const darkThemeHeader = '#65000B'

const button = {
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

const containerView = {
  flex: 1,
}

const header = {
  fontSize: 24,
  fontWeight: 'normal',
  textAlign: 'center',
}

const segmentedControlTab = {
  marginHorizontal: 10,
  marginVertical: 5
}

const sliderContainer = {
  justifyContent: 'center',
  marginHorizontal: '5%',
  paddingVertical: 15,
  paddingHorizontal:30
}

const sliderTitleContainer = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const toggleSwitchContainer = {
  justifyContent: 'center',
  marginHorizontal: '5%',
  paddingVertical: 15,
  paddingHorizontal:30
}

const cameraContainer = {
  flex: 1,
  backgroundColor: 'black'
}

const camera = {
  flex: 1,
  justifyContent: "space-between"
}

const topBar = {
  flex: 0.2,
  backgroundColor: "transparent",
  flexDirection: "row",
  paddingTop: Constants.statusBarHeight,
  paddingLeft: Constants.statusBarHeight / 2
}

const bottomBar = {
  paddingBottom: isIPhoneX ? 25 : 5,
  backgroundColor: "transparent",
  justifyContent: "space-around",
  flex: 0.12,
  flexDirection: "row"
}

const noPermissions = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 10
}

const bottomButton = {
  height: 58,
  justifyContent: "center",
  alignItems: "center"
}

const takePicture = {
  alignSelf: "center"
}

const imageBackgroundContainer = {
  flex: 1,
  justifyContent: "space-between"
}

const endJob = {
  backgroundColor: 'red',
  borderRadius: 10,
  marginHorizontal: 10,
}

const horizonalLine = {
  borderBottomColor: 'grey',
  borderBottomWidth: 2,
  marginHorizontal:10
}

const endContainer = {
  justifyContent:'flex-end',
}

const centerContainer = {
  justifyContent:'center'
}

const logoText = {
  fontSize: 35,
  fontWeight: "800",
  marginBottom:60,
  textAlign: 'left',
}

const loginFormView = {
  paddingHorizontal:20,
  justifyContent:'center'
}

const loginFormTextInput = {
  height: 45,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  paddingLeft: 10,
  marginHorizontal: 15,
  marginVertical: 5,
}

const emergencyButton = {
  flexDirection: 'column',
  backgroundColor: 'red',
  height: 100,
  marginHorizontal: 10,
}

const mapContainer = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

const paragraph = {
  margin: 15,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
}

const map = {
  flex:1,
  alignSelf: 'stretch',
}

const marker = {
  width: 25,
  height: 25
}

const changePassword = {
  textAlign: 'center'
}

const settingsContainer = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const reorderCardContainer = {
  padding: 0, 
  marginVertical: 0, 
  flexDirection: "row-reverse",
  borderRadius: 5
}

const reorderCardTouch = {
  flex: 1,
  padding: 10,
}

const reorderCardRotation = {
  flexDirection: "row-reverse",
  alignItems: "center",
}

const messageInputContainer = {
  flexDirection: "row", 
  padding: 0, 
  margin: 0
}

const messagingTextInput = {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  paddingLeft: 10,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 5,
  marginBottom: 5,
}

const commentButton = {
  fontWeight: "600",
  fontSize: 17,
  backgroundColor: "transparent",
  marginTop: 10,
  marginBottom: 5
}

const cameraTouch = {
  height: 30,
  width: 30,
  marginLeft: 10
}

const commentCardContainer = {
  flexDirection: "row",
  justifyContent: "space-between"
}

const commentCardAuthorContainer = {
  paddingLeft: 10, 
  paddingTop: 10
}

const commentCardAuthorText = {
  fontSize: 18, 
  fontWeight: "bold"
}

const commentCardTopLevelContainer = {
  marginVertical: 0, 
  padding: 0,
  borderRadius: 5,
}

const pinContainer = {
  margin: 0, 
  padding: 0 
}

const commentCardImageTopLevel = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around"
}

const commentCardImageSecondaryLevel = {
  flex: 1,
  width: 150,
  height: 150,
  alignItems: "center",
  justifyContent: "center",
  margin: 5
}

const commentCardImageThirdLevel = {
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  top: 0,
  resizeMode: "contain"
}

const commentCardFontContainer = {
  paddingLeft: 10
}

const commentCardFontSize = {
  fontSize: 18
}

const commentCardDateContainer = {
  paddingLeft: 10, 
  paddingBottom: 10
}

const commentCardDate = {
  fontStyle: "italic" 
}

const accordionTitleRow = {
  flex: 1,
  flexDirection: "row"
} 
const title = {
  fontSize: 18
}
const contentRow = {
  flexDirection: "row",
  flexWrap: "wrap"
}
const box = {
  minWidth: 65,
  minHeight: 65,
  borderRadius: 1,
  borderWidth: 1,
  alignItems: "center",
  justifyContent: "center",
  margin: 5
}

const titleRow = {
  flexDirection: "row",
  justifyContent: "space-between",
  height: 56,
  alignItems: "center",
  padding: 10,
} 
const accordionContentRow = {
  paddingHorizontal: 15
}

const heading= {
  fontSize: 17,
  padding: 10
}

const homeText = {
  fontSize: 25, 
  marginTop: 10, 
  alignSelf: "center"
}

const card = {
  borderRadius:10, 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function getStyleSheet(useDarkTheme){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}

const lightStyleSheet = StyleSheet.create({
    appbackground: {
        backgroundColor: darkThemeTextColor
    },
    button: {
        // backgroundColor: '#0076FF', // default ios button blue 
        ...button,
        backgroundColor: 'green',
    },
    iconButtonStyle: {
      ...iconButtonStyle,
        backgroundColor: iphoneBlue,
    },
    containerView: {
      ...containerView
    },
    header:{
        ...header,
        backgroundColor: '#0076FF',
        color : darkThemeTextColor
      },
    headerText:{
        color : darkThemeTextColor,
    },
    rootContainer: {
          backgroundColor: '#8FC1E3',
      },
    segmentedControlTab: {
        ...segmentedControlTab
    },
    card: {
        backgroundColor: '#F7F9FB'
    },
    sliderContainer: {
      ...sliderContainer,
      backgroundColor: darkThemeTextColor,
    },
    sliderTitleContainer: {
      ...sliderTitleContainer
    },
    toggleSwitchContainer: {
      ...toggleSwitchContainer,
      backgroundColor: darkThemeTextColor
    },

    tabStyles: {
      backgroundColor: darkThemeTextColor,
      color: 'black',
    },

    card: {
      ...card
    },

    //camera
    cameraContainer: {
      ...cameraContainer
    },
    camera: {
      ...camera
    },
    topBar: {
      ...topBar
    },
    noPermissions: {
      ...noPermissions
    },
    cameraFontColor: {
      color: darkThemeTextColor
    },
    takePicture: {
      ...takePicture
    },

    // image
    imageBackgroundContainer: {
      ...imageBackgroundContainer
    },
    bottomBar: {
      ...bottomBar
    },
    whiteText: {
      color: darkThemeTextColor
    },
    bottomButton: {
      ...bottomButton
    },

    // home
    endJob: {
      ...endJob
      },
    horizonalLine: {
      ...horizonalLine
    },
    homeText: {
      ...homeText,
      color: 'black'
    },



    // job
    jobEndContainer: {
    ...endContainer
    },
    jobCenterContainer: {
      ...centerContainer
    },



    // login
    logoText: {
      ...logoText
    },
    loginFormView: {
      ...loginFormView
    },
    loginFormTextInput: {
      ...loginFormTextInput,
      backgroundColor: '#fafafa',
    },
    changePassword: {
      ...changePassword,
        color: '#0a84ff',
    },



    // map
    mapContainer: {
      ...mapContainer
    },
    paragraph: {
      ...paragraph,
      color: '#34495e',
    },
    map: {
      ...map
    },
    marker: {
      ...marker
    },



    // settings
    emergencyButton: {
      ...emergencyButton
    },
    settingsContainer:{
      ...settingsContainer,
    },

    settingsChildren:{

    },


    // units
    unitCenterContainer: {
      ...centerContainer,
      marginBottom: 20
    },

    reorderCardContainer: {
      ...reorderCardContainer
    },
    reorderCardTouch: {
      ...reorderCardTouch
    },
    reorderCardRotation: {
      ...reorderCardRotation
    },
    messageInputContainer: {
      ...messageInputContainer
    },
    messagingTextInput: {
      ...messagingTextInput,
      backgroundColor: "#fafafa",
    },
    commentButton: {
      ...commentButton,
        color: "#0084ff",
    },
    cameraTouch: {
      ...cameraTouch
    },
    commentCardContainer: {
      ...commentCardContainer
    },
    commentCardAuthorContainer: {
      ...commentCardAuthorContainer
    },
    commentCardAuthorText: {
      ...commentCardAuthorText
    },
    commentCardTopLevelContainer: {
      ...commentCardTopLevelContainer
    },
    pinContainer: { 
      ...pinContainer
    },
    commentCardImageTopLevel: {
      ...commentCardImageTopLevel
    },
    commentCardImageSecondaryLevel: {
      ...commentCardImageSecondaryLevel
    },
    commentCardImageThirdLevel: {
      ...commentCardImageThirdLevel
    },
    commentCardFontContainer: {
      ...commentCardFontContainer
    },
    commentCardFontSize: {
      ...commentCardFontSize 
    },
    commentCardDateContainer: {
      ...commentCardDateContainer
    },
    commentCardDate: {
      ...commentCardDate  
    },

    // job filter
    accordionTitleRow: {
      ...accordionTitleRow
    },
    title: {
      ...title
    },
    contentRow: {
      ...contentRow
    },
    box: {
      ...box,
      borderColor: "steelblue",
    },
    
    // accordion
    titleRow: {
      ...titleRow,
      backgroundColor: "#F8F8F8"
    },
    accordionContentRow: {
      ...accordionContentRow
    },

    // new field event
    heading: {
      ...heading
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const darkStyleSheet = StyleSheet.create({
    appbackground: {
        backgroundColor: darkThemeBackgroundColor
    },
    button: {
      ...button,
        backgroundColor: '#0076FF', // default ios button blue 
    },
    iconButtonStyle: {
        ...iconButtonStyle,
        backgroundColor: '#0076FF',
    },
    containerView: {
      ...containerView
    },
    header:{
        ...header,
        // backgroundColor: '#0076FF',
        backgroundColor: darkThemeHeader,
        color : darkThemeTextColor
      },
    headerText:{
        color : darkThemeTextColor,
    },
    rootContainer: {
          backgroundColor: darkThemeTextColor,
      },
    segmentedControlTab: {
        ...segmentedControlTab,
        backgroundColor: darkThemeBackgroundColor
    },
    card: {
      ...card,
      backgroundColor: '#d8e6f0'
    },
    sliderContainer: {
      ...sliderContainer,
        backgroundColor: '#002060',
        
    },
    sliderTitleContainer: {
      ...sliderTitleContainer,
    },

    sliderText:{
      color: darkThemeTextColor
    },

    toggleSwitchContainer: {
      ...toggleSwitchContainer,
        backgroundColor: '#002060',
        color: darkThemeTextColor,  
    },

    tabStyles: {
      backgroundColor: 'black',
      color: darkThemeTextColor,
    },

    // camera
    cameraContainer: {
      ...cameraContainer
    },
    camera: {
      ...camera
    },
    topBar: {
      ...topBar
    },

    noPermissions: {
      ...noPermissions
    },
    cameraFontColor: {
      color: darkThemeTextColor
    },
    takePicture: {
      ...takePicture
    },

    // image
    imageBackgroundContainer: {
      ...imageBackgroundContainer
    },

    bottomBar: {
      ...bottomBar
    },
    whiteText: {
      color: darkThemeTextColor
    },
    bottomButton: {
      ...bottomButton
    },
    // home
    endJob: {
        ...endJob
      },
    horizonalLine: {
      ...horizonalLine
    },
    homeText: {
      ...homeText,
      color: darkThemeTextColor
    },



    // job
    jobEndContainer: {
    ...endContainer,
    backgroundColor: darkThemeBackgroundColor
    },
    jobCenterContainer: {
      ...centerContainer
    },



    // login
    logoText: {
      ...logoText,
      color: darkThemeTextColor
      },
    loginFormView: {
      ...loginFormView
    },
    loginFormTextInput: {
      ...loginFormTextInput,
      backgroundColor: '#fafafa',
    },
    changePassword: {
      ...changePassword,
      color: '#0a84ff',
    },



    // map
    mapContainer: {
      ...mapContainer
    },
    paragraph: {
      ...paragraph,
      color: '#34495e',
    },
    map: {
      ...map
    },
    marker: {
      ...marker
    },



  // settings
  emergencyButton: {
    ...emergencyButton
  },
  settingsContainer:{
    ...settingsContainer
  },
  settingsChildren:{
    backgroundColor: '#002060',
    color: 'white'
  },


  // units
  unitCenterContainer: {
    ...centerContainer
  },
  reorderCardContainer: {
    ...reorderCardContainer
  },
  reorderCardTouch: {
    ...reorderCardTouch
  },
  reorderCardRotation: {
    ...reorderCardRotation
  },
  messageInputContainer: {
    ...messageInputContainer
  },
  messagingTextInput: {
    ...messagingTextInput,
      backgroundColor: "#fafafa",
  },
  commentButton: {
    ...commentButton,
      color: darkThemeTextColor
  },
  cameraTouch: {
    ...cameraTouch
  },
  commentCardContainer: {
    ...commentCardContainer
  },
  commentCardAuthorContainer: {
    ...commentCardAuthorContainer
  },
  commentCardAuthorText: {
    ...commentCardAuthorText
  },
  commentCardTopLevelContainer: {
    ...commentCardTopLevelContainer
  },
  pinContainer: { 
    ...pinContainer
  },
  commentCardImageTopLevel: {
    ...commentCardImageTopLevel
  },
  commentCardImageSecondaryLevel: {
    ...commentCardImageSecondaryLevel
  },
  commentCardImageThirdLevel: {
    ...commentCardImageThirdLevel
  },
  commentCardFontContainer: {
    ...commentCardFontContainer
  },
  commentCardFontSize: {
    ...commentCardFontSize  
  },
  commentCardDateContainer: {
    ...commentCardDateContainer
  },
  commentCardDate: {
    ...commentCardDate  
  },

  // job filter
  accordionTitleRow: {
    ...accordionTitleRow,
    backgroundColor: darkThemeBackgroundColor
  },
  title: {
    ...title,
    color: darkThemeTextColor
  },
  contentRow: {
    ...contentRow
  },
  box: {
    ...box,
    borderColor: "steelblue",
  },

  // accordion
  titleRow: {
    ...titleRow,
    backgroundColor: darkThemeBackgroundColor
  },
  accordionContentRow: {
    ...accordionContentRow,

  },

  //new field event
  heading: {
    ...heading,
    color: darkThemeTextColor
  }
});