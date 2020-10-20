import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import Header from '../../components/Header';
import color from '../../supports/styles/Color';
import spacing from '../../supports/styles/Spacing';

function LoginPage(){
    console.log({...color.white,...spacing.pOne})
    return(
        <SafeAreaView>
            <View style={{...color.bgPrimary,...spacing.pOne}}>
                <Header content='Login Here' />
            </View>
        </SafeAreaView>
    )
}

export default LoginPage;