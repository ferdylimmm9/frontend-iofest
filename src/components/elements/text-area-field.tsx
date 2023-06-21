import { Textarea, TextareaProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends TextareaProps {
  name: string;
}

export default function TextAreaField(props: Props) {
  const { name, readOnly = false, disabled = false, error, ...rest } = props;
  const { control } = useFormContext();
  const { field, fieldState, formState } = useController({
    name,
    control,
  });
  const { editable } = useFormState();
  const _disabled = readOnly || disabled || !editable || formState.isSubmitting;
  const _error = error || fieldState.error?.message;
  return (
    <Textarea
      {...rest}
      {...field}
      value={field.value}
      onChange={(event) => field.onChange(event.currentTarget.value)}
      disabled={_disabled}
      error={_error}
    />
  );
}
