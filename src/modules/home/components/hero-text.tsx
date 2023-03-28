import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import { Row } from 'modules/common/styles';

import { TextHeroContainer } from '../styles';

export default function HeroText() {
  return (
    <TextHeroContainer>
      <Row>
        <Text
          variant="heading5Medium"
          color="secondary"
          css={{ '@md': typography.heading3Medium }}
        >
          Travelling &nbsp;
        </Text>
        <Text
          variant="heading5Medium"
          color="white"
          css={{ '@md': typography.heading3Medium }}
        >
          to Indonesia ?
        </Text>
      </Row>

      <Separator gap={15} />
      <Text
        variant="heading3Medium"
        color="white"
        css={{
          fontFamily: 'Playfair Display',

          '@md': {
            ...typography.heading1Medium,
            fontFamily: 'Playfair Display',
            fontSize: 48,
          },
        }}
      >
        Learn everything about Indonesia here
      </Text>
      <Separator gap={24} />
      <Text
        variant="body1Regular"
        color="white"
        css={{ '@md': typography.heading5Regular }}
      >
        Find language teacher, private tour guide, place recommendations, read
        articles and more
      </Text>
      <Separator gap={36} />
      <Button variant="primary" color="white">
        Our Services
      </Button>
    </TextHeroContainer>
  );
}
