import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen.JS';

import SearchScreen from './src/screens/SearchScreen';



const Stack = createNativeStackNavigator();
{
  search: SearchScreen
  ResultsShow: ResultsShowScreen

}

function MyStack() {
  initialRouteName: 'Search'
  defaultNavigationOptions: {
    title: 'Business Search'
  }
  
  return(
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='search' component={SearchScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  );
  };


export default MyStack;