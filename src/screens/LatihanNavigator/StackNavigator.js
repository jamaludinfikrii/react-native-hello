import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Account from '../Account/Account';
import Chat from '../Chat/Chat';
import Dashboard from '../Dashboard/Dashboard';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';


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
   