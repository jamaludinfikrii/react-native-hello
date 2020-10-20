import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Register =(props) => {
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

const Account = () => {
    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Account Page
            </Text>
        </View>
    )
}

const Chat = () => {
    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Chat Page
            </Text>
        </View>
    )
}


const Dashboard = ({navigation}) => {
    return(
        <View style={{flexDirection : "row"}}>
           <View style={{width : "33%",borderColor : "black",borderWidth : 2,height : 40,justifyContent : "center",alignItems : "center"}}>

                <Text onPress={() => navigation.navigate('account')}>Account</Text>
           </View>
           <View style={{width : "33%",borderColor : "black",borderWidth : 2,height : 40,justifyContent : "center",alignItems : "center"}}>
                <Text  onPress={() => navigation.navigate('chat')}>Chat</Text>
           </View>
           <View style={{width : "33%",borderColor : "black",borderWidth : 2,height : 40,justifyContent : "center",alignItems : "center"}}>
                <Text  onPress={() => navigation.navigate('products')}>Products</Text>
           </View>
           
        </View>
    )
}




const ProductList = ({navigation}) => {
    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Products Page
            </Text>
            <Text onPress={() => navigation.navigate('detail')}>
                Products Detail
            </Text>
        </View>
    )
}

const ProductDetail = () => {
    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Products Detail
            </Text>
        </View>
    )
}




const StackProduct = createStackNavigator()
const ProductStack = () => {
    return(
        <StackProduct.Navigator>
            <StackProduct.Screen name='products' component={ProductList} />
            <StackProduct.Screen name='detail' component={ProductDetail} />
        </StackProduct.Navigator>
    )
}

const HomeStack = createStackNavigator()
const HomePage =() => {
    return(
       <HomeStack.Navigator>
           <HomeStack.Screen name='dashboard' component={Dashboard} />
           <HomeStack.Screen name='account' component={Account} />
           <HomeStack.Screen name='chat' component={Chat} />
           <HomeStack.Screen name='products' component={ProductStack} />
       </HomeStack.Navigator>
    )
}

const Stack = createStackNavigator()
const MyStack = () => {
   return(
       <Stack.Navigator>
          
           <Stack.Screen name='register' component={Register} />
           <Stack.Screen name='login' component={Login} />
           <Stack.Screen name='homepage' component={HomePage} />
       </Stack.Navigator>
   )
}

export default MyStack







// login
// register
// homepage
    // account
    // chat
    // productList
        // product Detail
    // cart