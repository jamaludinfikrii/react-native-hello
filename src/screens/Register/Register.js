import React from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const Register =(props) => {
    console.log('register page')
    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                This is Register Page
            </Text>
            <Text style={{color:"blue",fontStyle :"italic"}} onPress={() =>props.navigation.navigate("login") }>
                Go To Login
            </Text>
            <Text style={{color:"blue",fontStyle :"italic"}} onPress={() =>props.navigation.navigate("homepage") }>
                Go To Homepage
            </Text>
            <Icon.Button
                name="user-circle"
                backgroundColor="#3b5998"
            >
                Login with Facebook
            </Icon.Button>
        </View>
    )
}

export default Register;