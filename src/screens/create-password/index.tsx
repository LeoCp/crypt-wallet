import React from 'react';

import { useCreatePassword } from '@screens/create-password/hooks/create-password';
import { InputPassword } from '@components/input-password';
import { Page } from '@components/page';

export function CreatePassword() {
  const { inputControl, onNext } = useCreatePassword();

  return (
    <Page title="Create Password" buttonTitle="Next" onPressButton={onNext}>
      <InputPassword
        control={inputControl}
        name="password"
        label="Password"
        placeholder="Enter password"
      />
      <InputPassword
        control={inputControl}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Enter confirm password"
      />
    </Page>
  );
}
