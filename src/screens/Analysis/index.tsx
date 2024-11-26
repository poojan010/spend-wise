import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import styles from './styles';

type AnalysisProps = NativeStackScreenProps<RootStackParamList, 'Analysis'>;

const Analysis: React.FC<AnalysisProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Analysis Screen</Text>
      <Button
        title="Go to Transactions"
        onPress={() => navigation.navigate('Transactions')}
      />
    </View>
  );
};

export default Analysis;
