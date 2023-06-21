import { NumberInput, NumberInputProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends NumberInputProps {
  name: string;
  required?: boolean;
}

export default function NumberField(props: Props) {
  const {
    name,
    error,
    readOnly = false,
    disabled = false,
    hideControls = true,
    ...rest
  } = props;
  const { editable } = useFormState();
  const { control } = useFormContext<any>();
  const { field, fieldState, formState } = useController({
    name,
    control,
  });

  const _disabled = disabled || readOnly || !editable || formState.isSubmitting;
  const _error = error || fieldState.error?.message;
  return (
    <NumberInput
      {...rest}
      {...field}
      error={_error}
      disabled={_disabled}
      hideControls={hideControls}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      formatter={(value) =>
        !Number.isNaN(parseFloat(value))
          ? `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          : ''
      }
    />
  );
}
