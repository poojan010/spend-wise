import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import OnboardingGuide from '../screens/OnboardingGuide';
import Home from '../screens/Home';
import Analysis from '../screens/Analysis';
import Transactions from '../screens/Transactions';
import Settings from '../screens/Settings';

// Define the stack param list
export type RootStackParamList = {
  Splash: undefined;
  OnboardingGuide: undefined;
  Home: undefined;
  Analysis: undefined;
  Transactions: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      animation: 'ios_from_right',
      headerShown: false,
    }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnboardingGuide" component={OnboardingGuide} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Analysis" component={Analysis} />
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
