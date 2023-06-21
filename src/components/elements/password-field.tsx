import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends PasswordInputProps {
  name: string;
}

export default function PasswordField(props: Props) {
  const { name, error, readOnly = false, disabled = false, ...rest } = props;
  const { editable } = useFormState();
  const { control } = useFormContext<any>();
  const { field, fieldState, formState } = useController({
    control,
    name,
  });
  const _disabled = readOnly || disabled || !editable || formState.isSubmitting;
  const _error = error || fieldState.error?.message;

  return (
    <PasswordInput {...rest} {...field} disabled={_disabled} error={_error} />
  );
}
