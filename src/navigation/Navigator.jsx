import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './../screens/SplashScreen';
import HomeScreen from './../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';
import CameraScreen from '../screens/CameraScreen';

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Iniciando" component={SplashScreen} x />
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Detalle de Foto" component={PhotoScreen} />
      <Stack.Screen name="Camara" component={CameraScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
