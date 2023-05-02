import { styled } from 'styles';

export const LoginContainer = styled('div', {
  mx: 16,

  px: 16,
  py: 32,

  width: '100%',

  '@sm': {
    maxWidth: '514px',
    mx: 'auto',
  },
  '@md': {
    px: 32,
    py: 48,
  },
});

export const FullScreen = styled('div', {
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
});
