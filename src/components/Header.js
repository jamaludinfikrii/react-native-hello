import React from 'react'
import { Text } from 'react-native'

export default function Header(props){
    return(
        <Text style={{fontWeight :"500",fontSize : 24, color : "#3b3b3b" }}>{props.content}</Text>
    )
}