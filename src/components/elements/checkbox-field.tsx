import { Checkbox, CheckboxProps } from '@mantine/core';
import * as React from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends CheckboxProps {
  name: string;
}

export default function CheckboxField(props: Props) {
  const { name, readOnly = false, disabled = false, error, ...rest } = props;
  const { editable } = useFormState();
  const { control } = useFormContext<any>();
  const { field, fieldState, formState } = useController({
    control,
    name,
  });

  const _disabled = !editable || disabled || readOnly || formState.isSubmitting;
  const _error = error || fieldState.error?.message;

  return (
    <Checkbox
      {...rest}
      {...field}
      checked={field.value}
      onChange={(e) => field.onChange(e.target.checked)}
      disabled={_disabled}
      error={_error}
    />
  );
}
