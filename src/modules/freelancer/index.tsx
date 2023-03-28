import { TextInput } from '@mantine/core';
import { FunnelSimple } from '@phosphor-icons/react';
import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import Header from 'components/widgets/header';
import {
  HalfContainer,
  PageContainer,
  Row,
  SectionContainer,
} from 'modules/common/styles';
import * as React from 'react';

import PersonCard from './components/person-card/person-card';
import {
  FilterContainer,
  LookingContainer,
  SearchButtonContainer,
  WrappedContainer,
} from './styles';

export default function FreelanceIndex() {
  const [query, setQuery] = React.useState('');

  return (
    <>
      <Header />
      <Separator gap={64} />
      <PageContainer>
        <SectionContainer>
          <HalfContainer>
            <Text
              variant="heading1Regular"
              color="white"
              css={{
                fontFamily: 'Playfair Display',
                '@md': {
                  ...typography.heading3Regular,
                  fontSize: 48,
                  fontFamily: 'Playfair Display',
                },
              }}
            >
              Hire best freelancers with best talents
            </Text>
          </HalfContainer>
          <Separator gap={32} />
          <HalfContainer>
            <Row css={{ alignItems: 'flex-end' }}>
              <TextInput
                styles={{
                  root: {
                    width: '100%',
                  },
                }}
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                label={
                  <Text
                    variant="body3Regular"
                    color="white"
                    css={{ '@md': typography.heading6Regular }}
                  >
                    Search names, locations, services
                  </Text>
                }
                placeholder="Raja Ampat Tour Guide"
                radius="xs"
              />
              <Button
                css={{ maxHeight: 36 }}
                variant="primary"
                color="white"
                size="medium"
              >
                Search
              </Button>
            </Row>
          </HalfContainer>
        </SectionContainer>
        <Separator gap={64} />
        <FilterContainer>
          <LookingContainer>
            <Text variant="heading5Medium" color="white">
              I am looking for...
            </Text>
            <Separator gap={24} />
            <SearchButtonContainer>
              <Button variant="wbSecondary">Tour Guiding</Button>
              <Separator gap={24} />

              <Button variant="wbSecondary">Translator</Button>
              <Separator gap={24} />

              <Button variant="wbSecondary">Language Instructor</Button>
            </SearchButtonContainer>
          </LookingContainer>
          <Separator gap={24} />
          <Button
            variant="wbSecondary"
            css={{
              backgroundColor: '#D9D9D9',
            }}
            onRenderRight={<FunnelSimple size={16} />}
          >
            Sort By
          </Button>
        </FilterContainer>
        <Separator gap={32} />
        <WrappedContainer>
          <PersonCard variant="secondary" />
          <PersonCard variant="secondary" />
          <PersonCard variant="secondary" />
          <PersonCard variant="secondary" />
          <PersonCard variant="primary" />
          <PersonCard variant="primary" />
          <PersonCard variant="primary" />
          <PersonCard variant="primary" />
          <PersonCard variant="primary" />
          <PersonCard variant="primary" />
        </WrappedContainer>
      </PageContainer>
      <Separator gap={128} />
    </>
  );
}
