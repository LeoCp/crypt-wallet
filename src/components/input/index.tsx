import React from 'react';
import { Input as InputBase, InputProps } from '@rneui/themed';
import { useController } from 'react-hook-form';
import { pathOr } from 'ramda';

interface Props extends InputProps {
  name: string;
  control: any;
}

export const Input = ({ name, control, ...props }: Props) => {
  const { field, formState } = useController({
    name,
    control,
  });
  const errorMessage = pathOr('', ['errors', name, 'message'], formState);

  return (
    <InputBase
      value={field.value}
      onChangeText={field.onChange}
      errorMessage={errorMessage}
      {...props}
    />
  );
};
