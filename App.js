import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import FAB from './components/FAB';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen'; // Import RegisterScreen

export default function App() {
  useFonts({
    'berkshire': require('./assets/fonts/berkshire.ttf')
  });

  const Stack = createNativeStackNavigator(); // Use capital 'Stack'

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen 
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
