import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import color from '../../supports/styles/Color';
import spacing from '../../supports/styles/Spacing';

function LoginPage(){
    console.log({...color.white,...spacing.pOne})
    return(
        <SafeAreaView>
            <View style={{...color.bgPrimary,...spacing.pOne}}>
                <Text style={color.white}>
                    Login Here
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default LoginPage;