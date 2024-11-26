import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import { useTheme } from '../../theme/ThemeContext';
import styles from './styles';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { theme } = useTheme();

  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.text}>Welcome Home, User</Text>
      <Button title="Go to Analysis" onPress={() => navigation.navigate('Analysis')} />
    </View>
  );
};

export default Home;
