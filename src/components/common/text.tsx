import typography from 'common/styles/typography';
import * as React from 'react';
import { styled, CSS, VariantProps } from 'styles';

const DEFAULT_TAG = 'span';

const StyledText = styled(DEFAULT_TAG, {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: '$regular',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    align: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },
    size: {
      xxs: {
        fontSize: '$xxs',
      },
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      xxl: {
        fontSize: '$xxl',
      },
    },
    variant: {
      ...typography,
      noVariant: {},
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    color: {
      primary: {
        color: '$primary500',
      },
      secondary: {
        color: '$secondary500',
      },
      tertiary: {
        color: '$tertiary500',
      },
      neutral: {
        color: '$neutral500',
      },
      success: {
        color: '$success500',
      },
      warning: {
        color: '$warning500',
      },
      error: {
        color: '$error500',
      },
      black: {
        color: '$black',
      },
      white: {
        color: '$white',
      },
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TextProps = React.HTMLAttributes<HTMLSpanElement>;
type TextCSSProp = { css?: CSS };
type TextVariants = VariantProps<typeof StyledText>;
export type ITextProps = TextProps & TextCSSProp & TextVariants;

const Text = React.forwardRef<HTMLSpanElement, ITextProps>((props, ref) => {
  return <StyledText {...props} ref={ref} />;
});

Text.displayName = 'Text';

export default Text;