import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './../screens/SplashScreen';
import HomeScreen from './../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';
import CameraScreen from '../screens/CameraScreen';



const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Photo" component={PhotoScreen} /> 
      <Stack.Screen name="Camera" component={CameraScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
