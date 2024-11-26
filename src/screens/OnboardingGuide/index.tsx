import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import { useTheme } from '../../theme/ThemeContext';
import styles from './styles';

type OnboardingGuideProps = NativeStackScreenProps<RootStackParamList, 'OnboardingGuide'>;

const OnboardingGuide: React.FC<OnboardingGuideProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.text}>Onboarding Guide</Text>
      <Button
        title="Start"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default OnboardingGuide;
