import { TextInput, TextInputProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { InputProps } from './field';

export interface TextInputFieldProps
  extends InputProps,
    Omit<TextInputProps, 'withAsterisk'> {
  required?: boolean;
  name: string;
  type: 'text';
}

export default function TextInputField(props: TextInputFieldProps) {
  const { name, required, type, size = 'md', ...rest } = props;
  const { control } = useFormContext<any>();
  const { field, fieldState } = useController({
    control,
    name,
  });

  return (
    <TextInput
      {...rest}
      {...field}
      size={size}
      withAsterisk={required}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      error={fieldState.error?.message}
    />
  );
}
