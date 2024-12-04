import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../navigation/RootNavigator';

import styles from './styles';
import {useTheme} from '../../theme/ThemeContext';

import {fetchSmsMessages} from '../../utils/smsHandler';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeProps> = ({}) => {
  const {theme} = useTheme();

  const themedStyles = styles(theme);

  const [messages, setMessages] = useState<
    {address: string; body: string; date: string}[]
  >([]);
  const [loading, setLoading] = useState(false);

  const loadMessages = async () => {
    setLoading(true);
    const fetchedMessages = await fetchSmsMessages();
    setMessages(fetchedMessages);
    setLoading(false);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <View style={themedStyles.container}>
      <FlatList
        data={messages}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={themedStyles.listItem}>
              <View style={themedStyles.listItemRow}>
                <Text style={themedStyles.listItemTitle}>{item.address}</Text>
                <Text style={themedStyles.listItemDate}>{item.date}</Text>
              </View>
              <Text style={themedStyles.listItemText}>{item.body}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
