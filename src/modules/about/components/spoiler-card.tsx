import { Image, Paper, Spoiler } from '@mantine/core';
import Separator from 'components/common/separator';
import Text from 'components/common/text';

interface Props {
  title: string;
  description: string;
  content: string;
  image: string;
}

export default function SpoilerCard(props: Props) {
  return (
    <>
      <Paper shadow="xs" style={{ overflow: 'hidden' }} radius="md" withBorder>
        <Image height={200} src={props.image} withPlaceholder />
        <Spoiler maxHeight={50} p="xs" showLabel="Show more" hideLabel="Hide">
          <Text variant="heading5Regular">{props.title}</Text>
          <Text variant="heading6Regular">{props.description}</Text>
          <Text variant="body2Regular">
            Irure dolore sit magna pariatur incididunt. Consequat nostrud do
            nostrud dolore in id occaecat qui elit proident aliquip ex. Veniam
            culpa eiusmod dolore sit. Irure aliquip esse in anim commodo sit
            reprehenderit velit. Qui consectetur ex tempor velit quis non
            laborum non velit. Ea qui nisi incididunt ut aliqua adipisicing
            minim ipsum sunt elit aliqua. Pariatur tempor cupidatat est ut
            veniam magna amet sint voluptate consequat. Magna laborum laboris
            reprehenderit elit.
          </Text>
        </Spoiler>
      </Paper>
      <Separator gap={16} />
    </>
  );
}
