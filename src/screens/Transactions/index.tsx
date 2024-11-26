/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import styles from './styles';

type TransactionsProps = NativeStackScreenProps<RootStackParamList, 'Transactions'>;

const Transactions: React.FC<TransactionsProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transactions</Text>

    </View>
  );
};

export default Transactions;
