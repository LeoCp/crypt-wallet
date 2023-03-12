import styled from 'styled-components/native';

import { Input as InputBase } from '@components/input';

export const InputPassword = styled(InputBase).attrs({
  keyboardType: 'number-pad',
  isOnlyNumbers: true,
  secureTextEntry: true,
  maxLength: 8,
})``;
