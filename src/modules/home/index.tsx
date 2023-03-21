import Separator from 'components/common/separator';
import Header from 'components/widgets/header';

import FeatureSection from './components/feature-section';
import HeroSection from './components/hero-section';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Separator gap={38} />
      <FeatureSection />
      <Separator gap={128} />
    </>
  );
}
