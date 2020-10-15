import React from 'react'
import { Button, SafeAreaView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

const Stopwatch = () => {
    return(
        <SafeAreaView>

            {/* Title */}
            <Text style={{fontSize : 30,textTransform : "uppercase",fontWeight : 'bold',textAlign: "center",marginTop : 50}}>
                Stopwatch
            </Text>

            {/* Stopwatch */}
            <View style={{flexDirection : "row",justifyContent : "center",marginTop : 30}}>
                <Text style={{fontSize : 60}}>00 : </Text> 
                <Text style={{fontSize : 60}}>00 : </Text>
                <Text style={{fontSize : 60}}>00 </Text>
            </View>

            {/* Buttons */}
            <View style={{flexDirection : "row",justifyContent : "center",marginTop : 20}}>
                <TouchableOpacity style={{backgroundColor : "black" , padding : 10,marginRight : 10}}> 
                    <Text style={{color :"white"}}>
                        Start 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor : "black" , padding : 10}}> 
                    <Text style={{color :"white"}}>
                        Stop 
                    </Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

export default Stopwatch;