import React from 'react';
import { View, Text, Switch } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootNavigator';
import { useTheme } from '../../theme/ThemeContext';
import styles from './styles';

type SettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const Settings: React.FC<SettingsProps> = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.text}>Settings Screen</Text>
      <View style={themedStyles.switchContainer}>
        <Text style={themedStyles.switchLabel}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
};

export default Settings;