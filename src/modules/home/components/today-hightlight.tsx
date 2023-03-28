import { PinSVG } from 'common/assets';
import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import { Row } from 'modules/common/styles';
import { TodayHighLightCard } from 'modules/home/styles';

export default function TodayHighlight() {
  return (
    <TodayHighLightCard>
      <Text variant="body1Medium" css={{ '@md': typography.heading5Medium }}>
        Today's Highlight
      </Text>
      <Separator gap={6} />
      <Row css={{ alignItems: 'center' }}>
        <Separator gap={6}>
          <PinSVG />
        </Separator>
        <div>
          <Text
            variant="caption1Regular"
            css={{ '@md': typography.heading6Regular }}
          >
            Nusa Penida Beach
          </Text>
          <Text
            variant="caption2Medium"
            css={{ '@md': typography.heading6Medium }}
          >
            Bali
          </Text>
        </div>
      </Row>
      <Separator gap={8} />

      <Text variant="caption2Regular" css={{ '@md': typography.body3Regular }}>
        Nusa Penida has become one of the most popular places to visit near Bali
        in recent years. One of the main factors in its rise to popularity is
        that Nusa Penida’s Beaches are just so damn epic.
      </Text>
    </TodayHighLightCard>
  );
}
