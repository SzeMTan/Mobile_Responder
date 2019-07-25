import {StyleSheet} from "react-native"

export default mapStyles = StyleSheet.create({
    container: {
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
      }
    })