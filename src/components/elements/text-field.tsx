import { TextInput, TextInputProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends TextInputProps {
  name: string;
}

export default function TextField(props: Props) {
  const { name, readOnly = false, disabled = false, error, ...rest } = props;
  const { editable } = useFormState();
  const { control } = useFormContext();
  const { field, fieldState, formState } = useController({ control, name });
  const _disabled = disabled || readOnly || !editable || formState.isSubmitting;
  const _error = error || fieldState.error?.message;
  return (
    <TextInput
      {...rest}
      {...field}
      onChange={(event) => field.onChange(event.currentTarget.value)}
      disabled={_disabled}
      error={_error}
    />
  );
}
