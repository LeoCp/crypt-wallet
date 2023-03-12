import React from 'react';

import { usePassword } from '@screens/password/hooks/password';
import { InputPassword } from '@components/input-password';
import { Page } from '@components/page';

export function Password() {
  const { inputControl, onNext } = usePassword();

  return (
    <Page
      title="Password"
      buttonTitle="Next"
      hasGoback={false}
      onPressButton={onNext}>
      <InputPassword
        control={inputControl}
        name="password"
        label="Password"
        placeholder="Enter your password"
      />
    </Page>
  );
}
