import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Camera from '../screens/Camera.js';
const Stack = createNativeStackNavigator();



export default function Navigation() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            
          name='HomeScreen'
          component={HomeScreen}
        />
        <Stack.Screen 
          name='Camera'
          component={Camera}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}