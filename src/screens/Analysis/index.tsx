import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import { useTheme } from '../../theme/ThemeContext';
import styles from './styles';

type AnalysisProps = NativeStackScreenProps<RootStackParamList, 'Analysis'>;

const Analysis: React.FC<AnalysisProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.text}>Analysis Screen</Text>
      <Button title="Go to Transactions" onPress={() => navigation.navigate('Transactions')} />
    </View>
  );
};

export default Analysis;
