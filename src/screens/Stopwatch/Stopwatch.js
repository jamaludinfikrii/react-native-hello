import React, { useState } from 'react'
import { Button, SafeAreaView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

const Stopwatch = () => {
    const [times,setTimes] = useState({
        ms : 0,
        s : 0,
        m : 0,
    })

  

    const onStart = () => {

        window.interval = setInterval(() => {
            setTimes((prev) => {
                return {...times,s : prev.s + 1}
            })
        },1000)

    }

    const onStop = () => {
        clearInterval(window.interval)
    }

    const onReset = () => {
        setTimes({
            ms : 0,
            s : 0,
            m : 0
        })
    }


    return(
        <SafeAreaView>

            {/* Title */}
            <Text style={{fontSize : 30,textTransform : "uppercase",fontWeight : 'bold',textAlign: "center",marginTop : 50}}>
                Stopwatch
            </Text>

            {/* Stopwatch */}
            <View style={{flexDirection : "row",justifyContent : "center",marginTop : 30}}>
                <Text style={{fontSize : 60}}>00 : </Text> 
                <Text style={{fontSize : 60}}>{times.s < 10 ? '0' + times.s : times.s} : </Text>
                <Text style={{fontSize : 60}}>00 </Text>
            </View>

            {/* Buttons */}
            <View style={{flexDirection : "row",justifyContent : "center",marginTop : 20}}>
                <TouchableOpacity onPress={onStart} style={{backgroundColor : "black" , padding : 10,marginRight : 10}}> 
                    <Text style={{color :"white"}}>
                        Start 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onStop} style={{backgroundColor : "black" , marginRight : 10 ,padding : 10}}> 
                    <Text style={{color :"white"}}>
                        Stop 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onReset} style={{backgroundColor : "black" , padding : 10}}> 
                    <Text style={{color :"white"}}>
                        Reset 
                    </Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

export default Stopwatch;