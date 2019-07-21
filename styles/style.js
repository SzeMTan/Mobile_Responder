import {StyleSheet} from "react-native"

export default styles = StyleSheet.create({
    button: {
        backgroundColor: '#0076FF', // default ios button blue 
        padding:10,
        borderRadius:10,  
        height:45,
        margin:10
    },
    iconButtonStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 55,
        backgroundColor: '#0076FF',
        borderRadius:25,
    },
    containerView: {
        flex: 1,
    },
    header:{
        fontSize: 24,
        fontWeight: 'normal',
        flex: 1,
        textAlign: 'center',
      },
    rootContainer: {
          backgroundColor: '#8FC1E3',
      },
    segmentedControlTab: {
        marginHorizontal: 10,
        marginVertical: 5
    }
});