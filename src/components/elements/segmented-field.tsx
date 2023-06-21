import { SegmentedControl, SegmentedControlProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends SegmentedControlProps {
  name: string;
}

export default function SegmentedField(props: Props) {
  const { name, readOnly = false, disabled = false, ...rest } = props;
  const { control } = useFormContext();
  const { editable } = useFormState();
  const { field, formState } = useController({
    control,
    name,
  });
  const _disabled = readOnly || disabled || !editable || formState.isSubmitting;
  return <SegmentedControl {...rest} {...field} disabled={_disabled} />;
}
