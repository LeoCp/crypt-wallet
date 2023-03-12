import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import EthereumImg from '@assets/ethereum.png';
import CopyPastImg from '@assets/copy.png';
import LogoutImg from '@assets/exit.png';

export const EthereumImage = styled.Image.attrs({
  source: EthereumImg,
})`
  height: 60px;
  width: 60px;
`;

export const LogoutButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const LogoutImage = styled.Image.attrs({
  source: LogoutImg,
})`
  height: 20px;
  width: 20px;
`;

export const Label = styled.Text.attrs({ children: 'Current Balance' })`
  font-size: 16px;
  font-weight: 500;
  color: gray;
`;

export const Header = styled.View`
  padding-left: 22px;
  padding-right: 22px;
`;

export const Wrapper = styled.SafeAreaView`
  padding-top: 60px;
  flex: 1;
  background-color: #fff;
`;

export const CopyPast = styled.Image.attrs({
  source: CopyPastImg,
})`
  width: 15px;
  height: 15px;
  margin-bottom: 2px;
  margin-left: 4px;
`;

export const Loading = styled.View.attrs({
  children: <ActivityIndicator color="#3C479C" />,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CurrentBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BalanceWapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 12px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const Title = styled.Text.attrs({
  children: 'Your wallet',
})`
  font-size: 28px;
  font-weight: 600;
  margin-top: 10px;
`;

export const Transactions = styled.View`
  margin-top: 60px;
  border-top-width: 1px;
  border-color: #f0f0f0;
  padding-top: 15px;
  padding-left: 22px;
  padding-right: 22px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const PublicAdressButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #f2fbff;
  margin-top: 10px;
  border-radius: 5px;
  padding: 4px 5px;
`;

export const PublicAdress = styled.Text``;

export const TransactionLabel = styled.Text.attrs({
  children: 'Transactions history',
})`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 45px;
  margin-top: 10px;
`;

export const Balance = styled.Text`
  font-size: 28px;
  font-weight: 500;
`;

export const Abbr = styled.Text.attrs({ children: 'ETH' })`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  margin-left: 4px;
`;

export const ComingSoon = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const ComingSoonText = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
