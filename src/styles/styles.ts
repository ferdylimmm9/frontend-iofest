import {
  CSS as StitchesCss,
  createStitches as createCss,
} from '@stitches/react';
import colors from 'common/styles/colors';
export type { VariantProps } from '@stitches/react';

const stitches = createCss({
  theme: {
    colors,
    fontWeights: {
      regular: '400',
      bold: '700',
      medium: '500',
      light: '300',
    },
    fonts: {
      rubik: 'Rubik',
    },
    fontSizes: {
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '24px',
      xl: '32px',
      xxl: '42px',
      xxxl: '68px',
      xxxxl: '72px',
    },
    radii: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '40px',
      round: '9999px',
    },
    shadows: {
      shadow1: '0px 0px 4px rgba(0, 0, 0, 0.15)',
      shadow2: '0px 1px 1px rgba(0, 0, 0, 0.08)',
      active: '0px 2px 2px rgba(21, 76, 152, 0.12)',
      success: '0px 2px 2px rgba(144, 255, 91, 0.12)',
      error: '0px 2px 2px rgba(245, 83, 112, 0.12)',
    },
    sizes: {
      xs: '490px',
      sm: '690px',
      md: '740px',
      lg: '900px',
      xl: '1140px',
      xxl: '1280px',
      xxxl: '1540px',
    },
    space: {
      xs: '8px',
      sm: '12px',
      md: '24px',
      lg: '36px',
      xl: '48px',
      xxl: '86px',
      xxxl: '108px',
      xxxxl: '156px',
    },
    zIndices: {
      header: '1000',
    },
  },
  media: {
    xs: '(min-width: 375px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
  utils: {
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export type CSS = StitchesCss<typeof stitches>;

export const { styled, globalCss, css, getCssText, theme, keyframes } =
  stitches;
