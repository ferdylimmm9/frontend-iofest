import { styled } from 'styles';

export const commonStyles = {
  breakpointsCss: {
    width: '100%',
    px: 16,
    '@sm': {
      maxWidth: 576,
    },
    '@md': {
      maxWidth: 768,
    },
    '@lg': {
      maxWidth: 992,
    },
    '@xl': {
      maxWidth: 1200,
    },
  },
};

export const Row = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const FullContainer = styled('div', {
  display: 'flex',
  flex: 1,
  width: '100%',
});
export const HalfContainer = styled('div', {
  width: '100%',
  '@lg': {
    width: '48%',
  },
});

export const SectionContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@lg': {
    flexDirection: 'row',
  },
});

export const PageContainer = styled('div', {
  ...commonStyles.breakpointsCss,
  margin: 'auto',
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  backgroundColor: 'transparent',
  variants: {
    background: {
      black: {
        backgroundColor: '$primary',
        color: '$white',
      },
      white: {
        backgroundColor: '$white',
        color: '$primary',
      },
    },
  },
});
