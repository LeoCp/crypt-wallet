import { useNavigation } from '@react-navigation/core';
import { useMMKVBoolean } from 'react-native-mmkv';

import { TRoutes } from '@routes/types/routes';
import { HAS_WALLET } from '@constants/wallet';
import secureStorage from '@storage/secure-storage';
import { SIGN_WALLET } from '@core/constants/wallet';

const RESET_NAVIGATION_TO_WELCOME = {
  index: 0,
  routes: [
    {
      name: TRoutes.WELCOME,
    },
  ],
};

export function useLogout() {
  const navigation = useNavigation();

  const [, setHasWallet] = useMMKVBoolean(HAS_WALLET);

  function onLogout() {
    setHasWallet(false);
    secureStorage.reset(SIGN_WALLET);
    navigation.reset(RESET_NAVIGATION_TO_WELCOME);
  }

  return onLogout;
}
