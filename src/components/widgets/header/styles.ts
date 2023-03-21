import { Burger } from '@mantine/core';
import { styles } from 'modules/common/styles';
import Link from 'next/link';
import { styled } from 'styles';

export const HeaderOuterContainer = styled('header', {
  position: 'sticky',
  left: 0,
  top: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$black',
});

export const HeaderInnerContainer = styled('nav', {
  ...styles.breakpointsCss,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: 18,
});

export const BrandContainer = styled('div', {});

export const DesktopNavigationContainer = styled('div', {
  flexDirection: 'row',
  gap: '24px',
  display: 'none',
  '@md': {
    display: 'flex',
  },
});

export const BurgerButton = styled(Burger, {
  display: 'block',
  backgroundColor: '$black',
  '@md': {
    display: 'none',
  },
});

export const LinkStyled = styled(Link, {
  textDecoration: 'none !important',
  px: 24,
  py: 8,
  color: '$textWhite !important',
  '&:hover': {
    opacity: 0.8,
  },
});
