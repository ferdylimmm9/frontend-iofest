import PasswordField, { PasswordFieldProps } from './password-field';
import TextInputField, { TextInputFieldProps } from './text-input-field';

export type InputType = 'text' | 'password';

export interface InputProps {
  type: InputType;
  name: string;
}

export default function Input(props: TextInputFieldProps | PasswordFieldProps) {
  switch (props.type) {
    case 'password':
      return <PasswordField {...props} />;
    default:
      return <TextInputField {...props} />;
  }
}
