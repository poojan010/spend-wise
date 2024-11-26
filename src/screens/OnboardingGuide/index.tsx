import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import styles from './styles';

type OnboardingGuideProps = NativeStackScreenProps<RootStackParamList, 'OnboardingGuide'>;

const OnboardingGuide: React.FC<OnboardingGuideProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding Guide</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default OnboardingGuide;
