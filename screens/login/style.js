import {StyleSheet} from "react-native"

export default loginStyles = StyleSheet.create({
      logoText: {
        fontSize: 35,
        fontWeight: "800",
        marginTop:80,
        marginBottom: 30,
        textAlign: 'left',
      },
      loginFormView: {
        flex: 1,
        paddingHorizontal:30
      },
      loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
      },
      changePassword: {
          color: '#0a84ff',
          textAlign: 'center'
      },
      loginFormInputs: {
        marginTop: 40,
      },
      
});