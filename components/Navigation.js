import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//screens 

import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator  initialRouteName='Home' 
            screenOptions = {{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#FDCEAF',
            tabBarActiveBackgroundColor: '#FA8334',
            tabBarInactiveBackgroundColor: '#FA8334',
        }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    TabBarLabel: 'Home',
                    tabBarIcon: ({color}) => {
                       return <MaterialCommunityIcons name="home" color={color} size={26} />
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name='Cities' 
                component={CitiesScreen}
                options={{
                    TabBarLabel: 'Cities',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="city" size={26} color={color} />
                    },
                    headerShown: false
                }}
             />
            <Tab.Screen
                name='Sign In'
                component={SignInScreen}
                options={{
                 TabBarLabel: 'Sign In',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="account-plus" size={26} color={color} />
                    },
                    headerShown: false
             }}
             />
            <Tab.Screen 
            name='Sign Up' 
            component={SignUpScreen}
            options={{
                TabBarLabel: 'Sign Up',
                tabBarIcon: ({color}) => {
                    return <MaterialCommunityIcons name="account" size={26} color={color} />
                },
                headerShown: false
            }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}