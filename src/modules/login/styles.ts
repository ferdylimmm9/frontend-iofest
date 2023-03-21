import { styled } from 'styles';

export const LoginContainer = styled('div', {
  backgroundColor: '$white',
  my: 'auto',
  mx: 16,

  px: 16,
  py: 32,
  minWidth: 'initial',

  '@sm': {
    mx: 'auto',
    minWidth: '514px',
  },
  '@md': {
    px: 32,
    py: 48,
  },
});

export const FullScreen = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
});
