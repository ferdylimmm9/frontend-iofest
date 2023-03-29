import { styled } from 'styles';

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  cursor: 'pointer',
  '@sm': {
    width: '45%',
  },
  '@md': {
    width: '30%',
  },
  '@lg': {
    width: '24%',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$white',
      },
    },
  },
});

export const ImageContainer = styled('div', {
  position: 'relative',

  width: '100%',
  height: '300px',

  objectFit: 'contain',

  '@sm': {
    height: '367px',
    width: '245px',
  },
  '@md': {
    width: '221px',
    height: '330px',
  },
  '@lg': {
    width: '231px',
    height: '345px',
  },
  '@xl': {
    width: '281px',
    height: '420px',
  },
});
