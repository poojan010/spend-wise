import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import { useTheme } from '../../theme/ThemeContext';
import styles from './styles';

type TransactionsProps = NativeStackScreenProps<RootStackParamList, 'Transactions'>;

const Transactions: React.FC<TransactionsProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.text}>Transactions Screen</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default Transactions;
