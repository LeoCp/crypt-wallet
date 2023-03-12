import {
  getGenericPassword,
  setGenericPassword,
  setInternetCredentials,
  getInternetCredentials,
  resetGenericPassword,
  resetInternetCredentials,
  ACCESSIBLE,
} from 'react-native-keychain';

const PASSWORD_WALLET = 'PASSWORD_WALLET';

class SecureStorage {
  async getPassword() {
    const credentials = await getGenericPassword();
    const hasPassword = credentials && credentials.password;

    if (hasPassword) {
      return credentials.password;
    }

    throw new Error('Cannot get the password');
  }

  setPassword(value: string) {
    return setGenericPassword(PASSWORD_WALLET, value);
  }

  setValue(key: string, value: string) {
    return setInternetCredentials(key, key, value, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
  }

  async getValue(key: string) {
    const credentials = await getInternetCredentials(key, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });

    const hasPassword = credentials && credentials.password;

    if (hasPassword) {
      return credentials.password;
    }

    throw new Error('Cannot get the value');
  }
  async reset(severInternetCredentials: string) {
    await resetGenericPassword();
    await resetInternetCredentials(severInternetCredentials);
  }
}

export default new SecureStorage();
