import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends DatePickerInputProps {
  name: string;
}

export default function DatePickerField(props: Props) {
  const { name, readOnly = false, disabled = false, error, ...rest } = props;
  const { control } = useFormContext();
  const { editable } = useFormState();
  const { field, fieldState, formState } = useController({ control, name });
  const _disabled = readOnly || disabled || !editable || formState.isSubmitting;
  const _error = fieldState.error?.message || error;

  return (
    <DatePickerInput {...rest} {...field} disabled={_disabled} error={_error} />
  );
}
