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
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    switchLabel: {
      fontSize: 18,
      color: theme.colors.text,
      marginRight: 10,
    },
  });

export default styles;
