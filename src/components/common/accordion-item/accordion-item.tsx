import {
  Accordion as RawAccordion,
  AccordionControlProps,
} from '@mantine/core';

export type AccordionItemType = {
  key?: string;
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export interface AccordionProps {
  item: AccordionItemType;
  controlProps?: AccordionControlProps;
}

export default function AccordionItem(props: AccordionProps) {
  const { item } = props;
  return (
    <RawAccordion.Item value={item.value} key={item.key}>
      <RawAccordion.Control styles={{}} {...props.controlProps}>
        {item.title}
      </RawAccordion.Control>
      <RawAccordion.Panel>{item.content}</RawAccordion.Panel>
    </RawAccordion.Item>
  );
}
