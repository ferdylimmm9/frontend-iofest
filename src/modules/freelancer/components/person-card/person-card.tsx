import { Rating } from '@mantine/core';
import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import { SectionContainer } from 'modules/common/styles';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import * as React from 'react';

import { CardContainer, ImageContainer } from './styles';

interface Props {
  //   data: {
  //     id: string;
  //     name: string;
  //     type: string;
  //     domicile: string;
  //     description: string;
  //     rating: number;
  //     totalReview: number;
  //     imageSrc:string;
  //   };
  variant: 'primary' | 'secondary';
}

export default function PersonCard(props: Props) {
  const {
    // data,
    variant,
  } = props;

  const { t } = useTranslation();

  const textColor = React.useMemo(
    () => (variant === 'primary' ? 'white' : 'primary'),
    [variant],
  );

  return (
    <CardContainer variant={variant}>
      <ImageContainer>
        <Image
          src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
          alt="name"
          fill
          objectFit="cover"
        />
      </ImageContainer>
      <Separator gap={16}>
        <Text
          variant="heading6Medium"
          css={{ '@md': typography.heading5Medium }}
          color={textColor}
        >
          Name
        </Text>
        <Separator gap={2} />

        <SectionContainer>
          <Text variant="body2Medium" color={textColor}>
            Type
          </Text>
          <Text variant="body2Medium" color={textColor}>
            Domicile
          </Text>
        </SectionContainer>
        <Separator gap={8} />
        <Text
          variant="body3Regular"
          color={textColor}
          css={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            '@md': typography.body2Regular,
          }}
        >
          Ullamco sit deserunt culpa culpa. Magna tempor consectetur labore
          voluptate duis do labore nisi anim est enim tempor. Sunt laboris ex ad
          ea laborum eu voluptate proident sit ex exercitation. Exercitation sit
          et irure aute aliqua eiusmod id labore exercitation quis Lorem. Elit
          ex ipsum ipsum ea. Sit ullamco consequat adipisicing do dolore.
          Deserunt eiusmod in esse ipsum sint deserunt excepteur.
        </Text>
        <Separator gap={8} />

        <Rating value={4.5} fractions={4} readOnly />
        <Separator gap={8} />
        <Text
          variant="caption2Regular"
          css={{ '@md': typography.body2Regular }}
          color="neutral"
        >
          {t('common:review_extra', { review: 50 })}
        </Text>
      </Separator>
    </CardContainer>
  );
}
