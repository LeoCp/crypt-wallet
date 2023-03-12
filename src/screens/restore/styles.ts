import styled from 'styled-components/native';

import { Input as InputBase } from '@components/input';

export const Input = styled(InputBase).attrs({
  label: 'Phrase',
  placeholder: 'Type 12 word recovery phrase',
  numberOfLines: 4,
  inputContainerStyle: { height: 110 },
  multiline: true,
})``;
