import React,{useState} from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'

function CounterHooks(){

    // const [variable,settervariable] = useState(initialvalue)
    const [counter,setCounter] = useState(0)
    return(
        <SafeAreaView>
            <Text style={{textAlign : "center",marginTop : 20,fontWeight : "bold",fontSize:28}}>Counter Hooks App</Text>
            
            <View style={{flexDirection : "row",justifyContent : "center",alignItems:'center',marginTop : 30}}>
                <Button title='-' onPress={() => setCounter(counter - 1)} /> 
                    <Text style={{marginHorizontal : 10}}>{counter}</Text>
                <Button title='+' onPress={() => setCounter(counter + 1)} />
            </View>
        </SafeAreaView>
    )
}

export default CounterHooks