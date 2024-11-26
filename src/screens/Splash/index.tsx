import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import { useTheme } from '../../theme/ThemeContext';
import styles from './styles';

type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const themedStyles = styles(theme);

  useEffect(() => {
    // Navigate to Onboarding screen after a delay
    const timer = setTimeout(() => {
      navigation.replace('OnboardingGuide');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.text}>Welcome to the App</Text>
    </View>
  );
};

export default Splash;
