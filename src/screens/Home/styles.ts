import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/types';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      paddingHorizontal : 12,
    },
    text: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.colors.text,
    },
    listItem: {
      marginTop: 16,
    },
    listItemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listItemTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.colors.text,
    },
    listItemDate: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.colors.text,
    },
    listItemText: {
      fontSize: 16,
      marginTop: 4,
      color: theme.colors.text
    }
  });

export default styles;
