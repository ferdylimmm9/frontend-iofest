import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import { Row } from 'modules/common/styles';
import {
  HeroInnerContainer,
  HeroOuterContainer,
  TextHeroContainer,
} from 'modules/home/styles';

import TodayHighlight from './today-hightlight';

export default function HeroSection() {
  return (
    <HeroOuterContainer>
      <HeroInnerContainer>
        <TextHeroContainer>
          <Row>
            <Text variant="heading3Medium" color="secondary">
              Travelling &nbsp;
            </Text>
            <Text variant="heading3Medium" color="white">
              to Indonesia ?
            </Text>
          </Row>

          <Separator gap={15} />
          <Text variant="heading1Medium" color="white">
            Learn everything about Indonesia here
          </Text>
          <Separator gap={24} />
          <Text variant="heading5Regular" color="white">
            Find language teacher, private tour guide, place recommendations,
            read articles and more
          </Text>
          <Separator gap={36} />
          <Button variant="primary" color="white">
            Our Services
          </Button>
        </TextHeroContainer>
        <TodayHighlight />
      </HeroInnerContainer>
    </HeroOuterContainer>
  );
}
