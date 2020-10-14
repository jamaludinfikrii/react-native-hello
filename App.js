import React from 'react'
import { FlatList, SafeAreaView, Switch, Text, TextInput, View,} from 'react-native'


const Data = [
  {id : 1, name : "fikri",age : 10},
  {id : 2, name : "andi",age : 20},
  {id : 3,name : "budi",age : 30},
]

const App = () => {
  return(
    <SafeAreaView>
      {/* <View>
        <Text>
          Hello World
        </Text>
        <Switch disabled={true} ios_backgroundColor="red"/>
        <TextInput placeholder='enter your name' />
      </View> */}

      {/* <View>
        {
          data.map((val,index) => {
            return(
              <Text key={index}>{val.name}</Text>
            )
          })
        }
      </View> */}

      <FlatList 
       data={Data}
       renderItem={({item,index}) => (
        <Text>{item.name}</Text>
       )}
       keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default App;