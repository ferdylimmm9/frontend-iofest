import { BackgroundImage, createStyles, rem } from '@mantine/core';
import typography from 'common/styles/typography';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import * as React from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    aspectRatio: '3/4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    ...typography.heading2Medium,
    color: theme.white,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface Props {
  title: string;
  background: string;
}

export default function SliderComponent(props: Props) {
  const { classes } = useStyles();
  return (
    <BackgroundImage
      p="xl"
      radius="md"
      src={props.background}
      className={classes.card}
      miw={300}
    >
      <Text className={classes.title}>{props.title}</Text>
      <Button variant="wbSecondary">Read More</Button>
    </BackgroundImage>
  );
}
