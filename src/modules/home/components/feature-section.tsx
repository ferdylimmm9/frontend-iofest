import {
  ReadIllustratorSVG,
  ResearchIllustratorSVG,
  ServiceIllustratorSVG,
} from 'common/assets';
import Text from 'components/common/text';
import { SectionContainer } from 'modules/common/styles';

import {
  FeatureCard,
  FeatureContainer,
  IllustrationContainer,
} from '../styles';

export default function FeatureSection() {
  return (
    <FeatureContainer>
      <SectionContainer>
        <FeatureCard>
          <IllustrationContainer>
            <ServiceIllustratorSVG />
          </IllustrationContainer>
          <Text variant="heading5Regular" color="white" align="center">
            Find freelancers to be your language teacher, tour guide, etc.
          </Text>
        </FeatureCard>
        <FeatureCard>
          <IllustrationContainer>
            <ResearchIllustratorSVG />
          </IllustrationContainer>
          <Text variant="heading5Regular" color="white" align="center">
            Learn & research about Indonesia’s culture and customs
          </Text>
        </FeatureCard>
        <FeatureCard>
          <IllustrationContainer>
            <ReadIllustratorSVG />
          </IllustrationContainer>

          <Text variant="heading5Regular" color="white" align="center">
            Read their stories visiting Indonesia
          </Text>
        </FeatureCard>
      </SectionContainer>
    </FeatureContainer>
  );
}
