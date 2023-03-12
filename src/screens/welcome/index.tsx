import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TRoutes } from '@routes/types/routes';
import { showToast } from '@utils/toast';
import { COMING_SOON } from '@core/constants/messages';

import * as S from './styles';

export function Welcome() {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo />
      </S.LogoWrapper>
      <S.Content>
        <S.Title />
        <S.Description />
        <S.ButtosWrapper>
          <S.RestoreWalletButton
            onPress={() => navigation.navigate(TRoutes.CREATE_PASSWORD)}
          />
          <S.CreateWalletButton onPress={() => showToast(COMING_SOON)} />
        </S.ButtosWrapper>
      </S.Content>
    </S.Wrapper>
  );
}
