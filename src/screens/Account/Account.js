import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { UserContext } from '../../context/UserContext'


const Account = () => {
    const {user} = useContext(UserContext)
    console.log('account page')

    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Account Page {user}
            </Text>
        </View>
    )
}

export default Account;