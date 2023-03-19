import { TextInput } from '@mantine/core';
import { useController, useForm, useFormContext } from 'react-hook-form';
import * as Yup from 'yup';

interface Props {
  name: string;
}
import * as React from 'react';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import Form from 'components/elements/form';
function TextInputTest(props: Props) {
  const { name } = props;
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });

  console.log(field.value, fieldState.error);

  return (
    <TextInput
      placeholder="test"
      label="mencoba"
      withAsterisk
      onChange={field.onChange}
      value={field.value}
      error={fieldState.error?.message}
    />
  );
}

export default function ExamplePages() {
  const defaultValues = React.useMemo(() => ({ test: '' }), []);
  const yupSchema = React.useMemo(
    () => Yup.object().shape({ test: Yup.string().required() }),
    [],
  );
  const resolver = useYupValidationResolver(yupSchema);
  const methods = useForm({
    defaultValues,
    resolver,
    mode: 'all',
  });

  const onSubmit = React.useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <TextInputTest name="test" />
    </Form>
  );
}
