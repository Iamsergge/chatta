import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import RegisterScreen from '../pages/RegisterScreen';
import ProfileScreen from '../pages/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeStackNav = () => {
    
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Favorites') {
              iconName = 'heart';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Home') {
              iconName = 'chatbox';
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: '#FFF',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#26394D',
            borderTopColor: '#BABABA'
          },
          showLabel: false
        }}
      >
        <Tab.Screen name="Favorites" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNav;
