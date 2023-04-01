import { commonStyles } from 'modules/common/styles';
import { styled } from 'styles';

export const LookingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  alignItems: 'flex-start',
  overflow: 'hidden',
  '@md': {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export const SearchButtonContainer = styled('div', {
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'row',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const FilterContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '@lg': {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export const WrappedContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 12,
  margin: 'auto',
});

export const PackageContainer = styled('div', {
  border: '1px solid white',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '16px',
  paddingBottom: '16px',
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  px: 16,
  '@sm': {
    maxWidth: 576,
  },
  '@md': {
    maxWidth: 768,
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '32px',
    paddingBottom: '32px',
  },
  '@lg': {
    maxWidth: 992,
  },
  '@xl': {
    maxWidth: 1200,
  },
});
