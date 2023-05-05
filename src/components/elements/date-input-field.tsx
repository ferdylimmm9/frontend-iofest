import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';
import { useController, useFormContext } from 'react-hook-form';

export interface DateFieldProps
  extends Omit<DatePickerInputProps, 'withAsterisk' | 'error' | 'type'> {
  type: 'date' | 'date-range';
  required?: boolean;
  name: string;
}

export default function DateField(props: DateFieldProps) {
  const { required, type, name, size = 'md', ...rest } = props;
  const { control } = useFormContext<any>();
  const { field, fieldState } = useController({ control, name });
  return (
    <DatePickerInput
      {...rest}
      {...field}
      type={type === 'date' ? 'default' : 'range'}
      size={size}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      error={fieldState.error?.message}
    />
  );
}
