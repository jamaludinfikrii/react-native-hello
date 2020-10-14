import React from 'react'
import { Alert, BackHandler, Button, FlatList, SafeAreaView,  Text, ToastAndroid, } from 'react-native'
import styles from './LatihanComponentsStyle'

const Data = [
  {id : 1, name : "fikri",age : 10},
  {id : 2, name : "andi",age : 20},
  {id : 3,name : "budi",age : 30},
]

const LatihanComponents = () => {

  const onExitPress = () => {
    Alert.alert(
      'Hold on!!',
      'Are You Sure Want To Exit??',
      [
        {text : "cancel", onPress:() => null, style:'cancel'},
        {text : "exit", onPress:() => BackHandler.exitApp(), style:'default'},
      ]
    )
  }

  const onShowToastPress = () => {
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
  }

  return(
    <SafeAreaView>

      <FlatList 
       data={Data}
       renderItem={({item,index}) => (
        <Text style={{...styles.colorRed,...styles.fontWeightBold}}>{item.name}</Text>
       )}
       keyExtractor={(item) => item.id.toString()}
      />



      <Button title='Exit' onPress={onExitPress} />


      <Button title='Show Toast' onPress={onShowToastPress} />
    </SafeAreaView>
  )
}


export default LatihanComponents;