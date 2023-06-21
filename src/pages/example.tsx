import { Button, Container, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import Text from 'components/common/text';
import CheckboxField from 'components/elements/checkbox-field';
import DatePickerField from 'components/elements/date-picker-field';
import DropzoneField from 'components/elements/dropzone-field';
import Form from 'components/elements/form';
import NumberField from 'components/elements/number-field';
import PasswordField from 'components/elements/password-field';
import RadioField from 'components/elements/radio-field';
import RatingField from 'components/elements/rating-field';
import RichTextField from 'components/elements/rich-text-field';
import SegmentedField from 'components/elements/segmented-field';
import SelectField from 'components/elements/select-field';
import SwitchField from 'components/elements/switch-field';
import TextAreaField from 'components/elements/text-area-field';
import TextField from 'components/elements/text-field';
import AdminLayout from 'components/widgets/admin-layout';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

export default function Example() {
  const [text, setText] = React.useState('');
  const [result, setResult] = React.useState<string | undefined>('');

  const defaultValues = React.useMemo(() => ({ isCheck: true }), []);
  const yupSchema = React.useMemo(() => Yup.object().shape({}), []);
  const resolver = useYupValidationResolver(yupSchema);
  const methods = useForm({
    defaultValues,
    resolver,
    mode: 'all',
  });
  const onSubmit = React.useCallback(async (values: typeof defaultValues) => {
    console.log(values);
  }, []);

  const onClickModals = React.useCallback(() => {
    modals.open({
      title: 'test',
      children: <Text>test</Text>,
    });
  }, []);
  const onClickModalConfirm = React.useCallback(() => {
    modals.openConfirmModal({
      labels: { cancel: 'tidak', confirm: 'ya' },
      children: <Text>test</Text>,
      title: 'test',
      onConfirm: () => console.log('terima'),
      onCancel: () => console.log('tidam'),
    });
  }, []);
  const [opened, { open, close }] = useDisclosure();

  return (
    <AdminLayout>
      <Container>
        <Button onClick={onClickModals}> onClick Modal</Button>
        <Button onClick={onClickModalConfirm}> onClick Modal Confirm</Button>
        <Button onClick={open}>Drawer</Button>
        <Drawer onClose={close} opened={opened}>
          adsfa
        </Drawer>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <button type="submit">translate</button>
          {process.env.NEXT_PUBLIC_OPENAI_KEY}
          {result}
        </form>
        <Form methods={methods} onSubmit={onSubmit}>
          <CheckboxField name="isCheck" label="checkbox" description="check" />
          <PasswordField name="password" label="password" description="test" />
          <NumberField name="number" label="number" description="label" />
          <RadioField
            name="product"
            label="product"
            options={[
              { label: 'test', value: 'test' },
              { label: 'test1', value: 'test1' },
            ]}
          />
          <RatingField name="rating" />
          <SegmentedField
            name="programming"
            data={[
              { label: 'test', value: 'test', disabled: true },
              { label: 'test1', value: 'test1', disabled: false },
              { label: 'test2', value: 'test2', disabled: false },
            ]}
          />
          <SelectField
            data={[{ value: 'test', label: 'test' }]}
            name="testing"
            label="select"
            placeholder="select"
          />
          <SwitchField name="switch" label="switch" />
          <TextAreaField
            name="area"
            placeholder="text area"
            label="text area"
          />
          <TextField name="field" placeholder="text field" label="text field" />
          <DropzoneField name="image" />
          <RichTextField
            name="richtext"
            placeholder="rich-text"
            label="rich text"
          />
          <DatePickerField name="date" placeholder="date" label="date" />
          <Container
            dangerouslySetInnerHTML={{
              __html:
                '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>',
            }}
          />
          <button type="submit">test</button>
          <>asdasd</>
        </Form>
      </Container>
    </AdminLayout>
  );
}
