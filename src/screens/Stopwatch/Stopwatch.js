import React, { useRef, useState } from 'react'
import { Button, SafeAreaView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

const Stopwatch = () => {
    const [times,setTimes] = useState('00 : 00 : 00')
    const [isStart,setIsStart] = useState(false)
    const interval = useRef(null)
  

    const onStart = () => {
        setIsStart(true)

        interval.current = setInterval(() => {
            setTimes((prev) => {
                let newTimes = prev // "00 : 00 : 00"
                let ms = Number(newTimes.split(':')[0])
                let s = Number(newTimes.split(':')[1])
                let m = Number(newTimes.split(':')[2])

                
                if(ms == 100){
                    ms = 0
                    s ++
                }else if(s == 60){
                    s = 0
                    m++
                }else{
                    ms ++
                }

                newTimes = ms < 10 ? '0' + ms : ms
                newTimes += ' : '

                newTimes += s < 10 ? '0' + s : s
                newTimes += ' : '

                newTimes += m < 10 ? '0' + m : m
                
                return newTimes
            })
        },1)

    }

    const onStop = () => {
        setIsStart(false)
        clearInterval(interval.current)
    }

    const onReset = () => {
        clearInterval(interval.current)
        setTimes("00 : 00 : 00")
    }


    return(
        <SafeAreaView>

            {/* Title */}
            <Text style={{fontSize : 30,textTransform : "uppercase",fontWeight : 'bold',textAlign: "center",marginTop : 50}}>
                Stopwatch
            </Text>

            {/* Stopwatch */}
            <View style={{flexDirection : "row",justifyContent : "center",marginTop : 30}}>
                <Text style={{fontSize : 60}}>{times} </Text> 
                
            </View>

            {/* Buttons */}
            <View style={{flexDirection : "row",justifyContent : "center",marginTop : 20}}>
                <TouchableOpacity onPress={onStart} disabled={isStart} style={{backgroundColor : "black" , padding : 10,marginRight : 10}}> 
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