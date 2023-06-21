import { Rating, RatingProps } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';

interface Props extends RatingProps {
  name: string;
}
export default function RatingField(props: Props) {
  const { name, fractions = 2, readOnly = false, ...rest } = props;
  const { control } = useFormContext();
  const { editable } = useFormState();
  const { field, formState } = useController({
    control,
    name,
  });
  const _disabled = readOnly || !editable || formState.isSubmitting;
  return (
    <Rating {...rest} {...field} fractions={fractions} readOnly={_disabled} />
  );
}
