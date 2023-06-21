import { Select, SelectProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends SelectProps {
  name: string;
  onChangeExtend?: () => void;
}

export default function SelectField(props: Props) {
  const {
    name,
    disabled = false,
    searchable = true,
    readOnly = false,
    error,
    ...rest
  } = props;
  const { control } = useFormContext();
  const { editable } = useFormState();
  const { field, fieldState, formState } = useController({
    control,
    name,
  });
  const _disabled = !editable || disabled || readOnly || formState.isSubmitting;
  const _error = error || fieldState.error?.message;

  return (
    <Select
      {...rest}
      {...field}
      onChange={(value) => {
        field.onChange(value);
        props.onChangeExtend?.();
      }}
      disabled={_disabled}
      error={_error}
      searchable={searchable}
    />
  );
}
