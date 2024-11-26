import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import styles from './styles';

type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App</Text>
      <Text
        onPress={() => navigation.navigate('OnboardingGuide')}
        style={styles.link}
      >
        Go to Onboarding
      </Text>
    </View>
  );
};

export default Splash;
