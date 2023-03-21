import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

export interface PasswordFieldProps
  extends Omit<PasswordInputProps, 'withAsterisk' | 'error'> {
  type: 'password';
  required?: boolean;
  name: string;
}

export default function PasswordField(props: PasswordFieldProps) {
  const { required, type, name, size = 'md', ...rest } = props;
  const { control } = useFormContext<any>();
  const { field, fieldState } = useController({ control, name });

  return (
    <PasswordInput
      {...rest}
      {...field}
      size={size}
      withAsterisk={required}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      error={fieldState.error?.message}
    />
  );
}
