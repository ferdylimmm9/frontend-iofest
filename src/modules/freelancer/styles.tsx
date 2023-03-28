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
