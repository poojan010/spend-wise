import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import styles from './styles';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, User </Text>
      <Button
        title="Go to Analysis"
        onPress={() => navigation.navigate('Analysis')}
      />
    </View>
  );
};

export default Home;
