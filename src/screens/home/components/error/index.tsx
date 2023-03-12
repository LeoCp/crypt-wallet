import React from 'react';
import { Button, Text } from '@rneui/themed';

import * as S from './styles';

type Props = {
  tryAgain: () => void;
};

export function Error({ tryAgain }: Props) {
  return (
    <S.Wrapper>
      <Text>Something went wrong</Text>
      <Button title="Tray again" onPress={tryAgain} />
    </S.Wrapper>
  );
}
