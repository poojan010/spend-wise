import { NativeModules, PermissionsAndroid, Platform } from 'react-native';

const { SmsReader } = NativeModules;

/**
 * Request SMS permission for Android devices.
 * @returns {Promise<boolean>} Whether the permission was granted.
 */
const requestSmsPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    console.warn('SMS reading is supported only on Android.');
    return false;
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      {
        title: 'SMS Permission Required',
        message: 'This app needs access to your SMS to read messages.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.error('Error requesting SMS permission:', error);
    return false;
  }
};

/**
 * Fetch SMS messages using the native SmsReader module.
 * @returns {Promise<{address: string, body: string, date: string}[]>} Array of SMS messages.
 */
const fetchSmsMessages = async (): Promise<{ address: string; body: string; date: string }[]> => {
  try {
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_SMS);

    if (!hasPermission) {
      const permissionGranted = await requestSmsPermission();
      if (!permissionGranted) {
        console.error('SMS permission denied.');
        return [];
      }
    }

    const result = await SmsReader.readMessages();
    const messages = JSON.parse(result);

    return messages;
  } catch (error) {
    console.error('Error reading SMS messages:', error);
    return [];
  }
};

export { requestSmsPermission, fetchSmsMessages };
