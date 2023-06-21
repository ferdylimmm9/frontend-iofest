import { Flex, Radio, RadioGroupProps, RadioProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

export interface RadioOptionProps extends RadioProps {
  value: string;
  label: string;
}

interface Props extends Omit<RadioGroupProps, 'children'> {
  options: RadioOptionProps[];
  name: string;
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
}

export default function RadioField(props: Props) {
  const {
    name,
    options,
    error,
    disabled = false,
    direction = 'horizontal',
    ...rest
  } = props;
  const { editable } = useFormState();
  const { control } = useFormContext<any>();
  const { field, fieldState, formState } = useController({
    name,
    control,
  });

  const _disabled = disabled || !editable || formState.isSubmitting;
  const _error = error || fieldState.error?.message;

  return (
    <Radio.Group {...rest} {...field} name={name} error={_error}>
      <Flex
        gap="sm"
        mt="xs"
        direction={direction === 'vertical' ? 'column' : 'row'}
      >
        {options.map((option) => (
          <Radio
            {...option}
            key={option.value}
            value={option.value}
            label={option.label}
            disabled={_disabled}
          />
        ))}
      </Flex>
    </Radio.Group>
  );
}
