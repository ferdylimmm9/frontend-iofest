import typography from 'common/styles/typography';
import * as React from 'react';
// import { Oval } from 'react-loader-spinner';
import { CSS, styled, VariantProps } from 'styles';
// import color from 'styles/color';

const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // borderRadius: 4,
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    grow: {
      true: {
        width: '100%',
      },
      false: {
        width: 'fit-content',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$secondary',
        color: '$primary',
        '&:hover': {
          opacity: 0.9,
          // backgroundColor: '',
        },
        '&:focus': {
          outlineColor: '$secondary',
          outlineStyle: 'solid',
          outlineWidth: 'medium',
        },
        '&:disabled': {
          color: '#828181',
          backgroundColor: '#A8AA08',
        },
      },
      secondary: {
        backgroundColor: '$primary',
        color: '$secondary',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '$primary2',
        // boxShadow: '$shadow2',
        '&:hover': {
          opacity: 0.9,
          // backgroundColor: '#DCE9FC',
        },
        '&:focus': {
          outlineColor: '$primary',
          outlineStyle: 'solid',
          outlineWidth: 'medium',
        },
        // '&:disabled': {
        //   color: '$typeLightGrey',
        //   backgroundColor: '$neutral1',
        //   borderColor: '$neutral2',
        // },
      },
      wbPrimary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:hover': {
          opacity: 0.9,
          // backgroundColor: '',
        },
        '&:focus': {
          outlineColor: '$primary',
          outlineStyle: 'solid',
          outlineWidth: 'medium',
        },
        // '&:disabled': {
        //   color: '$typeLightGrey',
        //   backgroundColor: '$typeDisabled2',
        // },
      },
      wbSecondary: {
        backgroundColor: '$white',
        color: '$primary',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '$primary',
        '&:hover': {
          opacity: 0.9,
          // backgroundColor: '#DCE9FC',
        },
        '&:focus': {
          outlineColor: '$primary',
          outlineStyle: 'solid',
          outlineWidth: 'medium',
        },
        // '&:disabled': {
        //   color: '$typeLightGrey',
        //   backgroundColor: '$neutral1',
        //   borderColor: '$neutral2',
        // },
      },
      tertiary: {
        background: '$white',
        color: '$primary2',
        '&:hover': {
          color: '$primary4',
        },
        '&:focus': {
          outlineColor: '#DCD4FF',
          outlineStyle: 'solid',
          outlineWidth: 'medium',
        },
        '&:disabled': {
          color: '$typeLightGrey',
        },
      },
    },
    size: {
      default: {
        ...typography.heading6Medium,
        height: 48,
        px: 16,
        py: 12,
        svg: {
          width: 24,
          height: 24,
        },
      },
      medium: {
        ...typography.body1Medium,
        height: 44,
        px: 16,
        py: 12,
        svg: {
          width: 18,
          height: 18,
        },
      },
    },
    justify: {
      between: {
        justifyContent: 'space-between',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    grow: false,
    size: 'default',
  },
});

const StyledSpan = styled('span', {});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onRenderLeft?: React.ReactNode;
  onRenderRight?: React.ReactNode;
  isLoading?: boolean;
};
type CssProps = { css?: CSS };
type ButtonVariants = VariantProps<typeof StyledButton>;

export type IButtonProps = ButtonProps & CssProps & ButtonVariants;

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const {
      type = 'button',
      onRenderLeft: _onRenderLeft,
      onRenderRight,
      children,
      isLoading,
      ...rest
    } = props;

    const onRenderLeft = React.useCallback(() => {
      if (isLoading) {
        return null;
        // return <Oval color={color.primary} secondaryColor={color.primary5} />;
      }
      return _onRenderLeft;
    }, [_onRenderLeft, isLoading]);

    return (
      <StyledButton ref={ref} type={type} {...rest}>
        {onRenderLeft()}
        <StyledSpan
          css={{
            ml: onRenderLeft() ? 8 : 0,
            mr: onRenderRight ? 8 : 0,
            whiteSpace: 'nowrap',
          }}
        >
          {children}
        </StyledSpan>
        {onRenderRight}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;
