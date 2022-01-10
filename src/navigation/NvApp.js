import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NvHomeScreen from './NvHomeScreen';
import NvAddAccount from './NvAddAccount';

const Stack = createNativeStackNavigator();

const NvNavigation = () => {
    const options = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={options}>
                <Stack.Screen name='Home' component={NvHomeScreen} />
                <Stack.Screen name='AddAccount' component={NvAddAccount} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default NvNavigation;