import { Spoiler, TextInput } from '@mantine/core';
import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import Header from 'components/widgets/header';
import {
  FullContainer,
  HalfContainer,
  PageContainer,
  Row,
  SectionContainer,
} from 'modules/common/styles';
import Image from 'next/image';
import * as React from 'react';

export default function CreateContract() {
  const [query, setQuery] = React.useState('');

  return (
    <>
      <Header />
      <Separator gap={64} />
      <PageContainer>
        <SectionContainer>
          <HalfContainer css={{ order: 3, '@md': { order: 1 } }}>
            <Button variant="wbSecondary">Type</Button>
            <Separator gap={24} />
            <Text
              variant="heading4Medium"
              color="white"
              css={{ '@md': typography.heading3Medium }}
            >
              Title
            </Text>
            <Separator gap={8} />
            <Spoiler maxHeight={110} showLabel="Show more" hideLabel="Hide">
              <Text
                variant="body2Regular"
                color="white"
                css={{ '@md': typography.heading6Medium }}
              >
                Excepteur aliquip reprehenderit laborum dolore non duis ea do
                sint duis aliquip. Adipisicing velit excepteur est anim nostrud.
                Ullamco non occaecat fugiat exercitation nulla dolore laborum
                veniam. Magna proident enim consequat cupidatat irure officia
                irure nisi exercitation proident. Tempor et ex quis aute nisi
                elit proident amet do. Eiusmod qui commodo eu fugiat voluptate
                cupidatat Lorem in.
              </Text>
            </Spoiler>
          </HalfContainer>
          <Separator gap={36} direction="vertical" css={{ order: 2 }} />

          <HalfContainer css={{ order: 1, '@md': { order: 3 } }}>
            <Text
              variant="heading5Medium"
              color="white"
              css={{ '@md': typography.heading4Medium }}
              view="mobile"
            >
              Freelancer
            </Text>
            <Separator gap={16} />
            <SectionContainer css={{ alignItems: 'flex-start' }}>
              <Image
                src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
                alt="test"
                width={150}
                height={210}
                style={{ objectFit: 'cover' }}
              />
              <Separator gap={16} />
              <FullContainer css={{ flexDirection: 'column' }}>
                <Row>
                  <Text
                    variant="heading6Medium"
                    color="white"
                    css={{ '@md': typography.heading5Medium }}
                  >
                    Name, &nbsp;
                  </Text>
                  <Text
                    variant="body2Medium"
                    color="white"
                    css={{ '@md': typography.heading5Medium }}
                  >
                    Occupation
                  </Text>
                </Row>
                <Separator gap={4} />
                <Text
                  variant="body1Regular"
                  color="white"
                  css={{ '@md': typography.heading6Regular }}
                >
                  Domicile
                </Text>
                <Separator gap={16} />

                <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide">
                  <Text
                    variant="body3Regular"
                    color="white"
                    css={{ '@md': typography.body2Regular }}
                  >
                    Voluptate est tempor officia dolor nostrud commodo mollit ut
                    aliquip non deserunt occaecat est. Proident ipsum mollit non
                    amet irure tempor aliquip nostrud est ea. Culpa cillum
                    eiusmod pariatur eiusmod dolore deserunt ad duis nulla ea
                    commodo. Nostrud sint aute anim nostrud dolore minim aliqua
                    sit enim.
                  </Text>
                </Spoiler>
              </FullContainer>
            </SectionContainer>
          </HalfContainer>
        </SectionContainer>
        <Separator gap={80} />
        <Text
          variant="heading5Medium"
          color="white"
          css={{ '@md': typography.heading5Medium }}
        >
          Set the description of the contract
        </Text>
        <Separator gap={16} />
        <TextInput
          styles={{
            root: {
              width: '100%',
            },
          }}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          placeholder="Raja Ampat Tour Guide"
          radius="xs"
        />
        <Separator gap={40} />
        <FullContainer>
          <HalfContainer>
            <Text
              variant="heading5Medium"
              color="white"
              css={{ '@md': typography.heading5Medium }}
            >
              Set the start of the contract
            </Text>
            <Separator gap={16} />
            <TextInput
              styles={{
                root: {
                  width: '258px',
                },
              }}
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              placeholder="05/05/2023"
              radius="xs"
            />
          </HalfContainer>
          <HalfContainer>
            <Text
              variant="heading5Medium"
              color="white"
              css={{ '@md': typography.heading5Medium }}
            >
              Set the end of the contract
            </Text>
            <Separator gap={16} />
            <TextInput
              styles={{
                root: {
                  width: '258px',
                },
              }}
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              placeholder="05/05/2023"
              radius="xs"
            />
          </HalfContainer>
        </FullContainer>
        <Separator gap={40} />
        <FullContainer>
          <HalfContainer>
            <Text
              variant="heading5Medium"
              color="white"
              css={{ '@md': typography.heading5Medium }}
            >
              Set the price of the contract
            </Text>
            <Separator gap={16} />
            <TextInput
              styles={{
                root: {
                  width: '258px',
                },
              }}
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              placeholder="2000000"
              radius="xs"
            />
            <Separator gap={48} />
            <Row>
              <Button>
                <Row>
                  <Image
                    src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
                    alt="S"
                    width={32}
                    height={32}
                    style={{ objectFit: 'cover' }}
                  />
                  <Separator gap={12} />
                  Save
                </Row>
              </Button>
              <Separator gap={24} />
              <Button variant="secondary" style={{ border: '2px solid white' }}>
                <Row>
                  <Image
                    src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
                    alt="S"
                    width={32}
                    height={32}
                    style={{ objectFit: 'cover' }}
                  />
                  <Separator gap={12} />
                  Save
                </Row>
              </Button>
            </Row>
          </HalfContainer>
        </FullContainer>
        <Separator gap={80} />
        <Row>
          <Text
            variant="heading3Medium"
            color="white"
            css={{ '@md': typography.heading3Medium }}
          >
            Validity -
          </Text>
          <Separator gap={6} />
          <Text
            variant="heading3Medium"
            color="secondary"
            css={{ '@md': typography.heading3Medium }}
          >
            Not Active
          </Text>
        </Row>
        <Separator gap={32} />
        <FullContainer>
          <HalfContainer>
            <Text
              variant="heading5Regular"
              color="white"
              css={{ '@md': typography.heading5Regular }}
            >
              You have not signed this contract
            </Text>
            <Separator gap={16} />
            <Button variant="primary">Sign</Button>
          </HalfContainer>
          <HalfContainer>
            <Text
              variant="heading5Regular"
              color="white"
              css={{ '@md': typography.heading5Regular }}
            >
              Freelancer has not signed this contract
            </Text>
            <Separator gap={16} />
            <Button variant="primary" disabled>
              Sign
            </Button>
          </HalfContainer>
        </FullContainer>
        <Separator gap={80} />
        <Row>
          <Text
            variant="heading3Medium"
            color="white"
            css={{ '@md': typography.heading3Medium }}
          >
            Payment -
          </Text>
          <Separator gap={6} />
          <Text
            variant="heading3Medium"
            color="secondary"
            css={{ '@md': typography.heading3Medium }}
          >
            Not Paid
          </Text>
        </Row>
        <Separator gap={32} />
        <FullContainer>
          <HalfContainer>
            <Text
              variant="heading5Regular"
              color="white"
              css={{ '@md': typography.heading5Regular }}
            >
              You have not paid this contract
            </Text>
            <Separator gap={16} />
            <Button variant="primary" disabled>
              Waiting
            </Button>
          </HalfContainer>
          <HalfContainer>
            <Text
              variant="heading5Regular"
              color="white"
              css={{ '@md': typography.heading5Regular }}
            >
              Freelancer has not received this payment
            </Text>
            <Separator gap={16} />
            <Button variant="primary" disabled>
              Waiting
            </Button>
          </HalfContainer>
        </FullContainer>
        <Separator gap={80} />
        <Row>
          <Text
            variant="heading3Medium"
            color="white"
            css={{ '@md': typography.heading3Medium }}
          >
            Completion -
          </Text>
          <Separator gap={6} />
          <Text
            variant="heading3Medium"
            color="secondary"
            css={{ '@md': typography.heading3Medium }}
          >
            Not Completed
          </Text>
        </Row>
        <Separator gap={32} />
        <FullContainer>
          <HalfContainer>
            <Text
              variant="heading5Regular"
              color="white"
              css={{ '@md': typography.heading5Regular }}
            >
              You have not set this contract to completed
            </Text>
            <Separator gap={16} />
            <Button variant="primary" disabled>
              Waiting
            </Button>
          </HalfContainer>
          <HalfContainer>
            <Text
              variant="heading5Regular"
              color="white"
              css={{ '@md': typography.heading5Regular }}
            >
              Freelancer has not confirmed this completion
            </Text>
            <Separator gap={16} />
            <Button variant="primary" disabled>
              Waiting
            </Button>
          </HalfContainer>
        </FullContainer>
      </PageContainer>
      <Separator gap={128} />
    </>
  );
}
