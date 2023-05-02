import { Paper, createStyles, rem } from '@mantine/core';
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

export default function SliderComponent() {
  const { classes } = useStyles();
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{
        backgroundImage: `url(https://engineering.unl.edu/images/staff/Kayla-Person.jpg)`,
      }}
      className={classes.card}
    >
      <Text className={classes.title}>Text</Text>
      <Button variant="wbSecondary">Read More</Button>
    </Paper>
  );
}
