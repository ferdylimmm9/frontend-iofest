import {
  createStyles,
  UnstyledButton,
  Menu,
  Image,
  Group,
} from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import images from '../../assets/png/index';

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    gap: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: 'none',
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
  },
}));

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const { pathname, asPath, query, locale, push } = useRouter();

  const data = [
    { label: 'EN', image: images.english, value: 'en' },
    { label: 'ID', image: images.indonesia, value: 'id' },
  ];
  const [selected, setSelected] = useState(locale === 'id' ? data[1] : data[0]);
  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} />}
      onClick={() => {
        setSelected(item);
        push({ pathname, query }, asPath, { locale: item.value });
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image src={selected.image} width={22} height={22} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <CaretDown size="1rem" className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown style={{ border: 'none' }}>{items}</Menu.Dropdown>
    </Menu>
  );
}
