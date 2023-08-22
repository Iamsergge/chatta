import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import FAB from './components/FAB';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProfileScreen from './pages/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNav from './components/HomeStackNav';

export default function App() {
  useFonts({
    'berkshire': require('./assets/fonts/berkshire.ttf')
  });

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="HomeStackNav"
      >
        <Stack.Screen name="Login" options={{
          headerShown: false
        }}>
            {(props) => <LoginScreen {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{
          headerShown: false
        }}>
          {(props) => <RegisterScreen {...props}/>}

        </Stack.Screen>
        <Stack.Screen name="HomeStackNav" options={{
          headerShown: false
        }}>
          {(props) => <HomeStackNav {...props}/>}

        </Stack.Screen>

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
