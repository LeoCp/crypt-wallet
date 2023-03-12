import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { TRoutes } from '@routes/types/routes';
import Encryptor from '@core/encryptor';
import { showToastError } from '@utils/toast';
import { PASSWORD_FORM_PARAMS } from '@screens/create-password/constants/form';
import { TCreatePasswordFormData } from '@screens/create-password/types/form-data';

export function useCreatePassword() {
  const navigation = useNavigation();

  const form = useForm<TCreatePasswordFormData>(PASSWORD_FORM_PARAMS);

  async function onNext(data: TCreatePasswordFormData) {
    try {
      const hashedPassword = await Encryptor.sha256(data.password);
      return navigation.navigate(TRoutes.RESTORE_WALLET, {
        hashedPassword,
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
