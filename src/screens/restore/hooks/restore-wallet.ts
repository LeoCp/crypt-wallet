import { useMMKVBoolean } from 'react-native-mmkv';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import Wallet from '@core/wallet';
import { showToastError } from '@utils/toast';
import { TRestoreWalletRouteProp } from '@screens/restore/types/route-prop';
import { TRestoreFormData } from '@screens/restore/types/form-data';
import { resetNavigationToHome } from '@utils/navigation';
import { PHRASE_FORM_PARAMS } from '@screens/restore/constants/form';
import { HAS_WALLET } from '@constants/wallet';

export function useRestoreWallet() {
  const navigation = useNavigation();

  const route = useRoute<TRestoreWalletRouteProp>();

  const form = useForm<TRestoreFormData>(PHRASE_FORM_PARAMS);

  const [, setHasWallet] = useMMKVBoolean(HAS_WALLET);

  async function onSubmit(data: TRestoreFormData) {
    try {
      await Wallet.restore(data.phrase, route.params?.hashedPassword);

      setHasWallet(true);

      navigation.reset(resetNavigationToHome(route.params));
    } catch (e) {
      showToastError();
    }
  }

  return {
    inputControl: form.control,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
