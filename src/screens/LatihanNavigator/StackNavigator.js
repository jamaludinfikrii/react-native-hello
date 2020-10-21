import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

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


const Login =() => {
    console.log('login page')

    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                This is Login Page
            </Text>
        </View>
    )
}

const Account = () => {
    console.log('account page')

    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Account Page
            </Text>
        </View>
    )
}

const Chat = () => {
    console.log('chat page')

    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Chat Page
            </Text>
        </View>
    )
}


const Dashboard = ({navigation}) => {
    console.log('dashboard page')

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
    console.log('product list page')

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
    console.log('product detail page')

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
    console.log('navigator product page')

    return(
        <StackProduct.Navigator>
            <StackProduct.Screen name='products' component={ProductList} />
            <StackProduct.Screen name='detail' component={ProductDetail} />
        </StackProduct.Navigator>
    )
}

const HomeStack = createBottomTabNavigator()
const HomePage =() => {
    console.log('navigator hompage page')

    return(
       <HomeStack.Navigator
            tabBarOptions={{activeTintColor : "orange",inactiveTintColor : "grey"}}
        >
           <HomeStack.Screen 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='home' size={props.size} color={props.color}/>
                    )
                }}}
                name='dashboard' 
                component={Dashboard} 
            />
           <HomeStack.Screen 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='user-circle' size={props.size} color={props.color}/>
                    )
                }}}
                name='account' 
                component={Account} 
            />
           <HomeStack.Screen 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='comments' size={props.size} color={props.color}/>
                    )
                }}}
                name='chat' 
                component={Chat} 
            />
           <HomeStack.Screen 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='shopping-bag' size={props.size} color={props.color}/>
                    )
                }}}
                name='products' 
                component={ProductStack} 
            />
       </HomeStack.Navigator>
    )
}

const Stack = createStackNavigator()
const MyStack = () => {
    console.log('main navigator')

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
// homepage (navigator)
    // dashboard
    // account
    // chat
    // productList (navigator)
        // products
        // product Detail
   