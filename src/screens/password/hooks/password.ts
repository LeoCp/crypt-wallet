import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import Wallet from '@core/wallet';
import { showToastError } from '@utils/toast';
import { resetNavigationToHome } from '@utils/navigation';
import { TPasswordFormData } from '@screens/password/types/form-data';
import { PASSWORD_FORM_PARAMS } from '@screens/password/constants/form';

export function usePassword() {
  const form = useForm<TPasswordFormData>(PASSWORD_FORM_PARAMS);

  const navigation = useNavigation();

  async function onNext(data: TPasswordFormData) {
    try {
      const { isValidPassword, hashedPassword } =
        await Wallet.verifyAndHashedPassword(data.password);

      if (isValidPassword) {
        return navigation.reset(resetNavigationToHome({ hashedPassword }));
      }

      form.setError('password', {
        type: 'custom',
        message: 'Invalid password',
      });
    } catch (e) {
      showToastError();
    }
  }

  return {
    inputControl: form.control,
    onNext: form.handleSubmit(onNext),
  };
}
