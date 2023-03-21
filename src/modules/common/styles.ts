import { styled } from 'styles';

export const styles = {
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
  justifyContent: 'space-between',
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
  justifyContent: 'space-between',
  flexDirection: 'column',
  '@lg': {
    flexDirection: 'row',
  },
});
