import React from 'react';
import styled from 'styled-components/native';

import ArrowBackImage from '@assets/arrow-back.png';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  padding: 0px 16px;
`;

export const ArrowBack = styled.Image.attrs({
  source: ArrowBackImage,
})`
  width: 20px;
  height: 20px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  children: <ArrowBack />,
})`
  margin-top: 5px;
  padding: 16px;
`;

export const Title = styled.Text`
  margin-top: 23px;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 60px;
`;
