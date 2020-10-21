import React, { useState } from 'react'
import CounterHooks from './src/screens/CounterHooks/CounterHooks';
import LatihanComponents from './src/screens/LatihanComponents/LatihanComponents';
import Layout from './src/screens/Layout/Layout';
import LoginPage from './src/screens/LoginPage/LoginPage';
import Stopwatch from './src/screens/Stopwatch/Stopwatch';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/screens/LatihanNavigator/StackNavigator';
import { UserContext } from './src/context/UserContext';

const App = () => {
  const [user,setUser] = useState('fikri') 

  return(
    <NavigationContainer>
      <UserContext.Provider value={{user : user,setUser:setUser}}>
        <MyStack />
      </UserContext.Provider>
    </NavigationContainer>
  )
}


export default App;