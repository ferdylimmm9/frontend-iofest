import Separator from 'components/common/separator';
import Text from 'components/common/text';
import { HalfContainer, Row } from 'modules/common/styles';

interface Props {
  label: string;
  content: string;
}

export default function LabelContent(props: Props) {
  return (
    <>
      <Row>
        <HalfContainer>
          <Text variant="heading6Regular" color="white">
            {props.label}
          </Text>
        </HalfContainer>
        <Separator gap={24} />
        <HalfContainer>
          <Text variant="heading6Regular" color="white">
            {props.content}
          </Text>
        </HalfContainer>
      </Row>
      <Separator gap={16} />
    </>
  );
}
