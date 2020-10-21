import React from 'react'
import { Text, View } from 'react-native'


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

export default Dashboard;
