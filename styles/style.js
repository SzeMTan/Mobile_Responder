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
        textAlign: 'center',
        backgroundColor: '#31708E'
      },
    rootContainer: {
          backgroundColor: '#8FC1E3',
      },
    segmentedControlTab: {
        marginHorizontal: 10,
        marginVertical: 5
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

});