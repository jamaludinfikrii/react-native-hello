import React,{useEffect, useState} from 'react'
import { Button, FlatList, SafeAreaView, Text, TextInput, View } from 'react-native'

function CounterHooks(){

    // const [variable,settervariable] = useState(initialvalue)
    const [counter,setCounter] = useState(0)

    // state with multiple value, state of object
    const [formData , setFormData] = useState({
        name : "",
        age : "",
        address : ""
    })

    const [data,setData] = useState(null)


    // lifecyclemethod
    // useEffect(function,dependency)
    useEffect(() => {
        getData()
    },[])

    useEffect(() => {
        console.log("HORRAY")
    },[counter])


    // get data function
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))
    }


    return(
        <SafeAreaView style={{paddingHorizontal : 20}}>

            {/* counter app */}
            <Text style={{textAlign : "center",marginTop : 20,fontWeight : "bold",fontSize:28}}>Counter Hooks App</Text>
            
            <View style={{flexDirection : "row",justifyContent : "center",alignItems:'center',marginTop : 30}}>
                <Button title='-' onPress={() => setCounter(counter - 1)} /> 
                    <Text style={{marginHorizontal : 10}}>{counter}</Text>
                <Button title='+' onPress={() => setCounter(counter + 1)} />
            </View>


            {/* input handler */}
            <View>
                <TextInput placeholder='name' value={formData.name} onChangeText={(text) => setFormData({...formData,name : text})}/>
                <TextInput placeholder='age' value={formData.age} onChangeText={(text) => setFormData({...formData,age : text})}/>
                <TextInput placeholder='address' value={formData.address} onChangeText={(text) => setFormData({...formData,address : text})}/>
                <Button title='submit' onPress={() => console.log(formData)} />
            </View>

            {/* Fetch data API */}
            
            <View style={{marginTop : 20}}>
                {
                    data === null ?
                    <Text style={{textAlign:"center"}}>Loading ...</Text>
                    :
                    <FlatList 
                        data={data}
                        renderItem={({item}) => <Text>{item.title}</Text>}
                        keyExtractor={(item) => item.id.toString()}
                    />
                }
            </View>
            
        </SafeAreaView>


    )
}

export default CounterHooks