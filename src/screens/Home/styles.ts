import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/types';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    text: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.colors.text,
    },
  });

export default styles;
