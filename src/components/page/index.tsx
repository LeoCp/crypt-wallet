import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';

import * as S from './styles';

type Props = {
  title: string;
  hasGoback?: boolean;
  children: React.ReactNode;
  buttonTitle: string;
  onPressButton: () => void;
};

export function Page({
  title,
  children,
  hasGoback = true,
  buttonTitle,
  onPressButton,
}: Props) {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      {hasGoback && <S.BackButton onPress={navigation.goBack} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        {children}
        <Button title={buttonTitle} onPress={onPressButton} />
      </S.Content>
    </S.Wrapper>
  );
}
