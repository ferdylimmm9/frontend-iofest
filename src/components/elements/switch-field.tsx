import { Switch, SwitchProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends SwitchProps {
  name: string;
}

export default function SwitchField(props: Props) {
  const { name, readOnly = false, disabled = false, error, ...rest } = props;
  const { editable } = useFormState();
  const { control } = useFormContext();
  const { field, fieldState, formState } = useController({
    control,
    name,
  });
  const _disabled = readOnly || disabled || !editable || formState.isSubmitting;
  const _error = fieldState.error?.message || error;
  return (
    <Switch
      {...rest}
      {...field}
      checked={field.value}
      error={_error}
      disabled={_disabled}
      onChange={(event) => field.onChange(event.currentTarget.checked)}
    />
  );
}
