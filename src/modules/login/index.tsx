import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import Input from 'components/elements/field';
import Form from 'components/elements/form';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { CSS } from 'styles';
import * as Yup from 'yup';

import { LoginFormType } from './form-type';
import { LoginContainer, FullScreen } from './styles';

export default function Login() {
  const defaultValues = React.useMemo<LoginFormType>(
    () => ({
      email: '',
      password: '',
    }),
    [],
  );

  const yupSchema = React.useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
      }),
    [],
  );

  const resolver = useYupValidationResolver(yupSchema);

  const methods = useForm<LoginFormType>({
    defaultValues,
    resolver,
    mode: 'all',
  });

  const onSubmit = React.useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <FullScreen>
      <LoginContainer>
        <Form methods={methods} onSubmit={onSubmit}>
          <Text variant="heading3Medium">Login</Text>
          <Separator gap={32} />

          <Input
            type="text"
            name="email"
            label="Email Address"
            placeholder="email"
            description="markdown"
          />
          <Separator gap={24} />

          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="password"
            description="markdown"
          />

          <Separator gap={32} />

          <Button variant="wbPrimary" css={style.buttonContainer}>
            Login
          </Button>
          <Separator gap={24} />

          <Text variant="heading6Regular">Don't have an account</Text>
          <Separator gap={4} />

          <Button variant="wbSecondary" css={style.buttonContainer}>
            Sign up
          </Button>
        </Form>
      </LoginContainer>
    </FullScreen>
  );
}

const style: { [x: string]: CSS } = {
  buttonContainer: {
    minWidth: '100px',
  },
};
