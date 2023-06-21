import { Button, Flex, Title } from '@mantine/core';
import { Check, Pen, X } from '@phosphor-icons/react';

import { useFormState } from './context';

interface Props {
  label: string;
  data?: any;
}

export default function FormHeader(props: Props) {
  const { label, data } = props;
  const { editable, setIsEditable } = useFormState();
  return (
    <Flex justify="space-between">
      <Title order={1}>{label}</Title>
      <Flex gap="md">
        {editable ? (
          <>
            <Button type="submit" leftIcon={<Check />}>
              Save
            </Button>
            {data && (
              <Button
                color="red"
                type="button"
                onClick={() => setIsEditable(false)}
                leftIcon={<X />}
              >
                Cancel
              </Button>
            )}
          </>
        ) : (
          data && (
            <>
              <Button type="submit" display="none" />
              <Button
                type="button"
                onClick={() => setIsEditable(true)}
                leftIcon={<Pen />}
              >
                Edit
              </Button>
            </>
          )
        )}
      </Flex>
    </Flex>
  );
}
