import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './RootNavigator';
import { ThemeProvider } from '../theme/ThemeContext';

const AppNavigationContainer = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigationContainer;
