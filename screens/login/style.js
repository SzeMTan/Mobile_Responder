import {StyleSheet} from "react-native"

export default loginStyles = StyleSheet.create({
      logoText: {
        fontSize: 35,
        fontWeight: "800",
        marginBottom:60,
        textAlign: 'left',
      },
      loginFormView: {
        paddingHorizontal:30,
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
});