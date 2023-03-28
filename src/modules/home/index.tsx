import Separator from 'components/common/separator';
import Header from 'components/widgets/header';
import { commonStyles } from 'modules/common/styles';

import FeatureSection from './components/feature-section';
import HeroSection from './components/hero-section';
import HeroText from './components/hero-text';
import { MobileView } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Separator gap={38} />
      <MobileView css={commonStyles.breakpointsCss}>
        <HeroText />
      </MobileView>
      <FeatureSection />
      <Separator gap={128} />
    </>
  );
}
