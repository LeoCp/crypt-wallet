import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useRoute } from '@react-navigation/core';

import { THomeRouteProp } from '@screens/home/types/route-prop';
import { useWalletInfo } from '@screens/home/hooks/wallet-info';
import { useLogout } from '@screens/home/hooks/logout';
import { formatToShortAddress } from '@utils/address';
import { Error } from '@screens/home/components/error';
import { onFormatWalletBalance } from '@utils/wallet';
import { onCopyToClipboard } from '@utils/clipboard';
import { COMING_SOON } from '@core/constants/messages';

import * as S from './styles';

export function Home() {
  const onLogout = useLogout();

  const { params } = useRoute<THomeRouteProp>();

  const walletInfo = useWalletInfo(params.hashedPassword);

  if (walletInfo.error) {
    return <Error tryAgain={walletInfo.refetch} />;
  }

  if (walletInfo.isLoading) {
    return <S.Loading />;
  }

  return (
    <S.Wrapper>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={walletInfo.isRefetching}
            onRefresh={walletInfo.refetch}
          />
        }>
        <S.Header>
          <S.TitleWrapper>
            <S.Title />
            <S.LogoutButton onPress={onLogout}>
              <S.LogoutImage />
            </S.LogoutButton>
          </S.TitleWrapper>
          <S.CurrentBalance>
            <View>
              <S.Label />
              <S.BalanceWapper>
                <S.Balance>
                  {onFormatWalletBalance(walletInfo.data?.currentBalance)}
                </S.Balance>
                <S.Abbr />
              </S.BalanceWapper>
            </View>
            <S.EthereumImage />
          </S.CurrentBalance>
          <S.Row>
            <S.PublicAdressButton
              onPress={() => onCopyToClipboard(walletInfo.data.publicAddress)}>
              <S.PublicAdress>
                {formatToShortAddress(walletInfo.data.publicAddress)}
              </S.PublicAdress>
              <S.CopyPast />
            </S.PublicAdressButton>
          </S.Row>
        </S.Header>
        <S.Transactions>
          <S.TransactionLabel />
          <S.ComingSoon>
            <S.ComingSoonText>{COMING_SOON}</S.ComingSoonText>
          </S.ComingSoon>
        </S.Transactions>
      </ScrollView>
    </S.Wrapper>
  );
}
