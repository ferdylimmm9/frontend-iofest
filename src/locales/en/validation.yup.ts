//@ts-ignore
import printValue from 'yup/lib/util/printValue';

export const mixed = {
  default: 'Field is invalid',
  required: 'Field is required',
  oneOf: 'Field must be one of the following values: ${values}',
  notOneOf: 'Field must not be one of the following values: ${values}',
  notType: ({ path, type, value, originalValue }: any) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `Field must be a \`${type}\` type, ` +
      `but the final value was: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (cast from the value \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`';
    }

    return msg;
  },
};

export const string = {
  length: 'Field must be exactly ${length} characters',
  min: 'Field must be at least ${min} characters',
  max: 'Field must be at most ${max} characters',
  matches: 'Field must match the following: "${regex}"',
  email: 'Field must be a valid email',
  url: 'Field must be a valid URL',
  trim: 'Field must be a trimmed string',
  lowercase: 'Field must be a lowercase string',
  uppercase: 'Field must be a uppercase string',
};

export const number = {
  min: 'Field must be greater than or equal to ${min}',
  max: 'Field must be less than or equal to ${max}',
  less: 'Field must be less than ${less}',
  more: 'Field must be greater than ${more}',
  notEqual: 'Field must be not equal to ${notEqual}',
  positive: 'Field must be a greater than 0',
  negative: 'Field must be a negative number',
  integer: 'Field must be an integer',
};

export const date = {
  min: 'Field must be later than ${min}',
  max: 'Field must be at earlier than ${max}',
};

export const boolean = {};

export const object = {
  noUnknown: 'Field cannot have keys not specified in the object shape',
};

export const array = {
  min: 'Field must have at least ${min} items',
  max: 'Field must have less than or equal to ${max} items',
};

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
};
