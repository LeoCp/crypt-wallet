import styled from 'styled-components/native';
import { Button as BaseButton } from '@rneui/base';

import EthWalletImage from '@assets/eth-wallet.png';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: flex-end;
`;

export const LogoWrapper = styled.View`
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: EthWalletImage,
})`
  height: 265px;
  width: 277px;
`;

export const Title = styled.Text.attrs({
  children: 'Welcome to crypt',
})`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 10px;
`;

export const Description = styled.Text.attrs({
  children: 'View your balance and securely backup your Ethereum wallet.',
})`
  text-align: center;
  font-size: 16px;
`;

export const ButtosWrapper = styled.View`
  padding: 50px 0px;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const RestoreWalletButton = styled(BaseButton).attrs({
  title: 'Restore wallet',
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#3C479C',
    paddingVertical: 12,
  },
})``;

export const CreateWalletButton = styled(BaseButton).attrs({
  title: 'Create wallet',
  type: 'outline',
  titleStyle: { color: '#3C479C' },
  buttonStyle: {
    borderRadius: 12,
    paddingVertical: 12,
    borderWidth: 1.2,
    borderColor: '#3C479C',
  },
})`
  margin-top: 14px;
`;
