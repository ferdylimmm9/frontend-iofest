import { Rating } from '@mantine/core';
import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import { SectionContainer } from 'modules/common/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import * as React from 'react';

import { CardContainer, ImageContainer } from './styles';

interface Props {
  data: {
    id: number;
    name: string;
    type: string;
    domicile: string;
    description: string;
    rating: number;
    review: number;
    image: string;
  };
  variant: 'primary' | 'secondary';
}

export default function PersonCard(props: Props) {
  const { data, variant } = props;

  const { t } = useTranslation();

  const textColor = React.useMemo(
    () => (variant === 'primary' ? 'white' : 'primary'),
    [variant],
  );

  const router = useRouter();

  const onNavigate = React.useCallback(() => {
    router.push(`/freelancers/${data.id}`);
  }, [data.id, router]);

  return (
    <CardContainer variant={variant} onClick={onNavigate}>
      <ImageContainer>
        <Image src={data.image} alt={data.name} fill objectFit="cover" />
      </ImageContainer>
      <Separator gap={16}>
        <Text
          variant="heading6Medium"
          css={{ '@md': typography.heading5Medium }}
          color={textColor}
        >
          {data.name}
        </Text>
        <Separator gap={2} />

        <SectionContainer>
          <Text variant="body2Medium" color={textColor}>
            {data.type}
          </Text>
          <Text variant="body2Medium" color={textColor}>
            {data.domicile}
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
          {data.description}
        </Text>
        <Separator gap={8} />

        <Rating value={4.5} fractions={4} readOnly />
        <Separator gap={8} />
        <Text
          variant="caption2Regular"
          css={{ '@md': typography.body2Regular }}
          color="neutral"
        >
          {t('common:review_extra', { review: data.review })}
        </Text>
      </Separator>
    </CardContainer>
  );
}
