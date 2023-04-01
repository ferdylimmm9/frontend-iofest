import { Accordion } from '@mantine/core';
import * as Icon from '@phosphor-icons/react';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import * as React from 'react';

export default function ExamplePages() {
  return (
    <div style={{ background: 'white' }}>
      <Separator gap={16} direction="vertical">
        === Body ===
        <Text variant="body1Light">Body 1 Light</Text>
        <Text variant="body2Light">Body 2 Light</Text>
        <Text variant="body3Light">Body 3 Light</Text>
        <Text variant="body1Regular">Body 1 Regular</Text>
        <Text variant="body2Regular">Body 2 Regular</Text>
        <Text variant="body3Regular">Body 3 Regular</Text>
        <Text variant="body1Medium">Body 1 Medium</Text>
        <Text variant="body2Medium">Body 2 Medium</Text>
        <Text variant="body3Medium">Body 3 Medium</Text>
      </Separator>
      <Separator gap={16} direction="vertical">
        === Caption ===
        <Text variant="caption1Light">Caption 1 Light</Text>
        <Text variant="caption2Light">Caption 2 Light</Text>
        <Text variant="caption3Light">Caption 3 Light</Text>
        <Text variant="caption1Regular">Caption 1 Regular</Text>
        <Text variant="caption2Regular">Caption 2 Regular</Text>
        <Text variant="caption3Regular">Caption 3 Regular</Text>
        <Text variant="caption1Medium">Caption 1 Medium</Text>
        <Text variant="caption2Medium">Caption 2 Medium</Text>
        <Text variant="caption3Medium">Caption 3 Medium</Text>
      </Separator>
      <Separator gap={16} direction="vertical">
        === Heading ===
        <Text variant="heading1Light" color="error">
          Heading 1 Light
        </Text>
        <Text variant="heading2Light">Heading 1 Light</Text>
        <Text variant="heading3Light">Heading 1 Light</Text>
        <Text variant="heading4Light">Heading 1 Light</Text>
        <Text variant="heading5Light">Heading 1 Light</Text>
        <Text variant="heading6Light">Heading 1 Light</Text>
        <Text variant="heading1Regular">Heading 1 Regular</Text>
        <Text variant="heading2Regular">Heading 2 Regular</Text>
        <Text variant="heading3Regular">Heading 3 Regular</Text>
        <Text variant="heading4Regular">Heading 4 Regular</Text>
        <Text variant="heading5Regular">Heading 5 Regular</Text>
        <Text variant="heading6Regular">Heading 6 Regular</Text>
        <Text variant="heading1Medium">Heading 1 Medium</Text>
        <Text variant="heading2Medium">Heading 2 Medium</Text>
        <Text variant="heading3Medium">Heading 3 Medium</Text>
        <Text variant="heading4Medium">Heading 4 Medium</Text>
        <Text variant="heading5Medium">Heading 5 Medium</Text>
        <Text variant="heading6Medium">Heading 6 Medium</Text>
      </Separator>
      <Separator gap={16} direction="vertical">
        === Button Text ===
        <Text variant="buttonDefault">Button Default</Text>
        <Text variant="buttonSmall">Button Small</Text>
      </Separator>
      === Accordion ===
      <Accordion variant="contained" defaultValue={['custom', 'asdf']} multiple>
        <Accordion.Item value="custom">
          <Accordion.Control>asdfa</Accordion.Control>
          <Accordion.Panel>asdfa</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="asdf">
          <Accordion.Control>asdfa</Accordion.Control>
          <Accordion.Panel>asdfa</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Separator gap={16} direction="vertical">
        <Button
          variant="secondary"
          size="medium"
          onRenderLeft={<Icon.CaretDown />}
        >
          Test
        </Button>
        <Button
          variant="primary"
          size="medium"
          onRenderRight={<Icon.CaretDown />}
        >
          Test
        </Button>
        <Button variant="wbPrimary" size="medium">
          Test
        </Button>
        <Button variant="secondary" size="medium">
          Test
        </Button>
        <Button variant="tertiary" size="medium">
          test
        </Button>
      </Separator>
    </div>
  );
}
