import React from 'react';

import { Page } from '@components/page';
import { useRestoreWallet } from '@screens/restore/hooks/restore-wallet';

import * as S from './styles';

export function RestoreWallet() {
  const { inputControl, onSubmit } = useRestoreWallet();

  return (
    <Page title="Restore wallet" buttonTitle="Restore" onPressButton={onSubmit}>
      <S.Input control={inputControl} name="phrase" />
    </Page>
  );
}
