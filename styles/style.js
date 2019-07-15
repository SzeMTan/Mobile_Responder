const React = require("react-native");

const { StyleSheet } = React;

export default StyleSheet.create({
    containerView: {
        flex: 1,
      },
      loginScreenContainer: {
        flex: 1,
      },
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
      loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
      },
      buttonView: {
        paddingVertical: 10
      },
      changePassword: {
          color: '#0a84ff',
          textAlign: 'center'
      },
      loginFormInputs: {
        marginTop: 40,
      },
      header:{
        fontSize: 24,
        fontWeight: 'normal',
        flex: 1,
        textAlign: 'center',
      },
});