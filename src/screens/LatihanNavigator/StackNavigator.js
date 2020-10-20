import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Register =(props) => {
    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                This is Register Page
            </Text>
            <Text style={{color:"blue",fontStyle :"italic"}} onPress={() =>props.navigation.navigate("login") }>
                Go To Login
            </Text>
        </View>
    )
}


const Login =() => {
    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                This is Login Page
            </Text>
        </View>
    )
}


const Stack = createStackNavigator()
const MyStack = () => {
   return(
       <Stack.Navigator>
          
           <Stack.Screen name='register' component={Register} />
           <Stack.Screen name='login' component={Login} />
       </Stack.Navigator>
   )
}

export default MyStack




