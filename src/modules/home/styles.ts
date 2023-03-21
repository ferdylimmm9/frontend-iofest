import { styles } from 'modules/common/styles';
import { styled } from 'styles';

export const HeroOuterContainer = styled('div', {
  width: '100%',
  background: 'rgba(0, 0, 0, 0.15)',
  backgroundImage: 'url("/assets/alfiano-sutianto.png")',
  backgroundBlendMode: 'multiply',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  py: 16,

  '@md': {
    py: 79,
  },
});

export const HeroInnerContainer = styled('div', {
  ...styles.breakpointsCss,
  display: 'flex',
  justifyContent: 'space-between',
});

export const TextHeroContainer = styled('div', {
  display: 'none',
  flexDirection: 'column',
  width: '100%',
  '@md': {
    display: 'flex',

    maxWidth: 547,
  },
});

export const TodayHighLightCard = styled('div', {
  alignSelf: 'flex-end',
  borderRadius: '20px',
  px: 16,
  py: 12,

  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  width: '100%',

  maxWidth: 'auto',

  '@sm': {
    maxWidth: 320,
  },

  '@md': {
    py: 20,
    px: 24,
  },
});

export const FeatureContainer = styled('div', {
  ...styles.breakpointsCss,
  margin: 'auto',
});

export const IllustrationContainer = styled('div', {
  display: 'flex',
  height: 300,
  alignItems: 'center',
  justifyContent: 'center',
});
export const FeatureCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 'auto',

  '@xs': {
    maxWidth: 358,
  },
});
