import {
  DesktopView,
  HeroInnerContainer,
  HeroOuterContainer,
} from 'modules/home/styles';

import HeroText from './hero-text';
import TodayHighlight from './today-hightlight';

export default function HeroSection() {
  return (
    <HeroOuterContainer>
      <HeroInnerContainer>
        <DesktopView>
          <HeroText />
        </DesktopView>
        <TodayHighlight />
      </HeroInnerContainer>
    </HeroOuterContainer>
  );
}
