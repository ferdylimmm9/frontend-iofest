import { Accordion, Avatar, Rating, Spoiler } from '@mantine/core';
import { CheckCircle, Heart, Info } from '@phosphor-icons/react';
import colors from 'common/styles/colors';
import typography from 'common/styles/typography';
import { string2moneyDefault } from 'common/utils/string';
import AccordionItem from 'components/common/accordion-item/accordion-item';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import Header from 'components/widgets/header';
import { format } from 'date-fns';
import {
  Container,
  FullContainer,
  HalfContainer,
  PageContainer,
  Row,
  SectionContainer,
} from 'modules/common/styles';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import * as React from 'react';

import { PackageContainer } from './styles';

export default function FreelanceShow() {
  const { t } = useTranslation();

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
                <Separator gap={16} />
                <Rating value={4.5} fractions={4} readOnly />
                <Separator gap={4} />
                <Text
                  variant="caption2Regular"
                  color="neutral"
                  css={{ '@md': typography.body2Regular }}
                >
                  (
                  {[
                    t('common:contract_extra', { contract: 123 }),
                    t('common:review_extra', { review: 123 }),
                  ].join(', ')}
                  )
                </Text>
                <Separator gap={16} />
                <Row>
                  <Button variant="primary">Visit Profile</Button>
                  <Separator gap={8} />
                  <Heart color={colors.white} size={32} />
                </Row>
              </FullContainer>
            </SectionContainer>
          </HalfContainer>
        </SectionContainer>
        <Separator gap={64} />
        <PackageContainer>
          <Text
            variant="heading5Medium"
            color="white"
            css={{ '@md': typography.heading4Medium }}
          >
            Package Template
          </Text>
          <Separator gap={4} />
          <Row>
            <Info color={colors.neutral} />
            <Separator gap={4} />
            <Text variant="body3Regular" color="neutral">
              This is just a template. You can adjust your contract super
              flexible later.
            </Text>
          </Row>
          <Separator gap={16} />
          <Accordion
            // classNames={classes}
            variant="contained"
            multiple
            radius="xs"
            style={{ width: '100%', backgroundColor: 'white' }}
            defaultValue={['package_a']}
          >
            <AccordionItem
              item={{
                value: 'package_a',
                title: (
                  <SectionContainer css={{ '@sm': { flexDirection: 'row' } }}>
                    <Text
                      variant="body1Medium"
                      css={{
                        '@md': typography.heading5Medium,
                      }}
                    >
                      Package A
                    </Text>
                    <Row css={{ justifyContent: 'flex-end' }}>
                      <Text
                        variant="body1Medium"
                        css={{ '@md': typography.heading5Medium }}
                      >
                        Rp {string2moneyDefault(384000)}
                      </Text>
                      <Separator gap={8} />
                      <Text
                        variant="body2Regular"
                        css={{ '@md': typography.heading6Regular }}
                      >
                        ($ {string2moneyDefault(25)})
                      </Text>
                    </Row>
                  </SectionContainer>
                ),
                content: (
                  <>
                    <hr />
                    <Separator gap={4} />
                    <Text
                      variant="body3Regular"
                      css={{ '@md': typography.body2Regular }}
                    >
                      Nulla incididunt velit duis velit laboris eu tempor
                      proident incididunt adipisicing ut. Voluptate commodo
                      veniam non ex tempor. Proident minim tempor cupidatat do
                      sit esse dolor aute magna dolor incididunt nostrud minim
                      do. Id nulla occaecat do do velit.
                    </Text>
                    <Separator gap={16} />
                    {[
                      'Aliquip proident exercitation aute nisi minim cillum reprehenderit pariatur ea fugiat eiusmod tempor cupidatat.',
                      'Nisi eiusmod laboris minim pariatur.',
                      'Eu duis culpa anim id eiusmod commodo in non cillum do non incididunt.',
                    ].map((text) => (
                      <Row css={{ my: 4, alignItems: 'flex-start' }}>
                        <CheckCircle weight="bold" size={24} />
                        <Separator gap={4} />
                        <Text
                          variant="body3Medium"
                          css={{
                            maxWidth: '80%',
                            '@md': typography.body2Medium,
                          }}
                        >
                          {text}
                        </Text>
                      </Row>
                    ))}
                  </>
                ),
              }}
            />
            <AccordionItem
              item={{
                value: 'package_b',
                title: (
                  <SectionContainer css={{ '@sm': { flexDirection: 'row' } }}>
                    <Text
                      variant="body1Medium"
                      css={{
                        '@md': typography.heading5Medium,
                      }}
                    >
                      Package B
                    </Text>
                    <Row css={{ justifyContent: 'flex-end' }}>
                      <Text
                        variant="body1Medium"
                        css={{ '@md': typography.heading5Medium }}
                      >
                        Rp {string2moneyDefault(384000)}
                      </Text>
                      <Separator gap={8} />
                      <Text
                        variant="body2Regular"
                        css={{ '@md': typography.heading6Regular }}
                      >
                        ($ {string2moneyDefault(25)})
                      </Text>
                    </Row>
                  </SectionContainer>
                ),
                content: (
                  <>
                    <hr />
                    <Separator gap={4} />
                    <Text
                      variant="body3Regular"
                      css={{ '@md': typography.body2Regular }}
                    >
                      Nulla incididunt velit duis velit laboris eu tempor
                      proident incididunt adipisicing ut. Voluptate commodo
                      veniam non ex tempor. Proident minim tempor cupidatat do
                      sit esse dolor aute magna dolor incididunt nostrud minim
                      do. Id nulla occaecat do do velit.
                    </Text>
                    <Separator gap={16} />
                    {[
                      'Aliquip proident exercitation aute nisi minim cillum reprehenderit pariatur ea fugiat eiusmod tempor cupidatat.',
                      'Nisi eiusmod laboris minim pariatur.',
                      'Eu duis culpa anim id eiusmod commodo in non cillum do non incididunt.',
                    ].map((text) => (
                      <Row css={{ my: 4, alignItems: 'flex-start' }}>
                        <CheckCircle weight="bold" size={24} />
                        <Separator gap={4} />
                        <Text
                          variant="body3Medium"
                          css={{
                            maxWidth: '80%',
                            '@md': typography.body2Medium,
                          }}
                        >
                          {text}
                        </Text>
                      </Row>
                    ))}
                  </>
                ),
              }}
            />
            <AccordionItem
              item={{
                value: 'package_c',
                title: (
                  <SectionContainer css={{ '@sm': { flexDirection: 'row' } }}>
                    <Text
                      variant="body1Medium"
                      css={{
                        '@md': typography.heading5Medium,
                      }}
                    >
                      Package C
                    </Text>
                    <Row css={{ justifyContent: 'flex-end' }}>
                      <Text
                        variant="body1Medium"
                        css={{ '@md': typography.heading5Medium }}
                      >
                        Rp {string2moneyDefault(384000)}
                      </Text>
                      <Separator gap={8} />
                      <Text
                        variant="body2Regular"
                        css={{ '@md': typography.heading6Regular }}
                      >
                        ($ {string2moneyDefault(25)})
                      </Text>
                    </Row>
                  </SectionContainer>
                ),
                content: (
                  <>
                    <hr />
                    <Separator gap={4} />
                    <Text
                      variant="body3Regular"
                      css={{ '@md': typography.body2Regular }}
                    >
                      Nulla incididunt velit duis velit laboris eu tempor
                      proident incididunt adipisicing ut. Voluptate commodo
                      veniam non ex tempor. Proident minim tempor cupidatat do
                      sit esse dolor aute magna dolor incididunt nostrud minim
                      do. Id nulla occaecat do do velit.
                    </Text>
                    <Separator gap={16} />
                    {[
                      'Aliquip proident exercitation aute nisi minim cillum reprehenderit pariatur ea fugiat eiusmod tempor cupidatat.',
                      'Nisi eiusmod laboris minim pariatur.',
                      'Eu duis culpa anim id eiusmod commodo in non cillum do non incididunt.',
                    ].map((text) => (
                      <Row css={{ my: 4, alignItems: 'flex-start' }}>
                        <CheckCircle weight="bold" size={24} />
                        <Separator gap={4} />
                        <Text
                          variant="body3Medium"
                          css={{
                            maxWidth: '80%',
                            '@md': typography.body2Medium,
                          }}
                        >
                          {text}
                        </Text>
                      </Row>
                    ))}
                  </>
                ),
              }}
            />
          </Accordion>

          <Separator gap={24} />
          <Container css={{ alignItems: 'center' }}>
            <Text variant="heading5Regular" color="white">
              Ready to book?
            </Text>
            <Button>Start Negotiation</Button>
          </Container>
        </PackageContainer>
        <Separator gap={48} />
        <Text
          variant="heading5Medium"
          color="white"
          css={{ '@md': typography.heading4Medium }}
        >
          FAQ
        </Text>
        <Separator gap={24} />
        <Accordion
          // classNames={classes}
          variant="contained"
          multiple
          radius="xs"
          style={{ width: '100%', backgroundColor: 'white' }}
          defaultValue={['package_a']}
        >
          {[
            {
              title:
                'In non exercitation non ipsum dolor eiusmod culpa ex voluptate consequat aliquip.',
              description:
                'Cillum eiusmod aute sunt laborum in. Lorem deserunt tempor consectetur cillum nisi labore ut sint veniam dolor. Labore pariatur culpa consequat velit amet aliquip nulla mollit quis. Est duis culpa do officia ut minim.',
            },
            {
              title:
                'In non exercitation non ipsum dolor eiusmod culpa ex voluptate consequat aliquip.',
              description:
                'Cillum eiusmod aute sunt laborum in. Lorem deserunt tempor consectetur cillum nisi labore ut sint veniam dolor. Labore pariatur culpa consequat velit amet aliquip nulla mollit quis. Est duis culpa do officia ut minim.',
            },
            {
              title:
                'In non exercitation non ipsum dolor eiusmod culpa ex voluptate consequat aliquip.',
              description:
                'Cillum eiusmod aute sunt laborum in. Lorem deserunt tempor consectetur cillum nisi labore ut sint veniam dolor. Labore pariatur culpa consequat velit amet aliquip nulla mollit quis. Est duis culpa do officia ut minim.',
            },
          ].map((item, index) => (
            <AccordionItem
              item={{
                value: index.toString(),
                title: (
                  <Text
                    variant="body3Medium"
                    css={{
                      '@md': typography.heading5Medium,
                    }}
                  >
                    {item.title}
                  </Text>
                ),
                content: (
                  <Text
                    variant="body3Regular"
                    css={{ '@md': typography.body2Regular }}
                  >
                    {item.description}
                  </Text>
                ),
              }}
            />
          ))}
        </Accordion>
        <Separator gap={48} />
        <Text
          variant="heading5Medium"
          color="white"
          css={{ '@md': typography.heading4Medium }}
        >
          Testimonials
        </Text>
        <Separator gap={24} />
        <Avatar.Group spacing={5}>
          <Avatar color="blue" radius="xl">
            FL
          </Avatar>
          <Avatar color="cyan" radius="xl">
            WA
          </Avatar>
          <Avatar color="dark" radius="xl">
            VM
          </Avatar>
          <Avatar color="grape" radius="xl">
            JL
          </Avatar>
          <Avatar color="gray" radius="xl">
            +5
          </Avatar>
        </Avatar.Group>
        <Separator gap={24} />
        <Row>
          <Avatar color="blue" radius="xl">
            FL
          </Avatar>
          <Separator gap={24} />
          <FullContainer css={{ flexDirection: 'column' }}>
            <Text color="white" variant="body3Regular">
              Ferdy Lim
            </Text>
            <Separator gap={4} />
            <Text color="white" variant="body2Regular">
              Veniam aute sunt nostrud nulla proident veniam in ea proident. Non
              ea veniam laboris sint velit laborum excepteur cupidatat cupidatat
              ex eu mollit nulla. Esse Lorem magna qui culpa sint elit nisi.
              Magna voluptate pariatur irure amet minim do cupidatat incididunt
              ullamco nisi voluptate quis. Eu reprehenderit do amet enim
              reprehenderit.
            </Text>
            <Separator gap={8} />
            <Row>
              <Rating fractions={5} value={4.5} readOnly />
              <Separator gap={8} />
              <Text variant="caption1Regular" color="white">
                {format(new Date(), 'yyyy MMM dd')}
              </Text>
            </Row>
          </FullContainer>
        </Row>
        <Separator gap={24} />
        <Row>
          <Avatar color="cyan" radius="xl">
            WA
          </Avatar>
          <Separator gap={24} />
          <FullContainer css={{ flexDirection: 'column' }}>
            <Text color="white" variant="body3Regular">
              William Antoline
            </Text>
            <Separator gap={4} />
            <Text color="white" variant="body2Regular">
              Veniam aute sunt nostrud nulla proident veniam in ea proident. Non
              ea veniam laboris sint velit laborum excepteur cupidatat cupidatat
              ex eu mollit nulla. Esse Lorem magna qui culpa sint elit nisi.
              Magna voluptate pariatur irure amet minim do cupidatat incididunt
              ullamco nisi voluptate quis. Eu reprehenderit do amet enim
              reprehenderit.
            </Text>
            <Separator gap={8} />
            <Row>
              <Rating fractions={5} value={4.5} readOnly />
              <Separator gap={8} />
              <Text variant="caption1Regular" color="white">
                {format(new Date(), 'yyyy MMM dd')}
              </Text>
            </Row>
          </FullContainer>
        </Row>
        <Separator gap={24} />
        <Row>
          <Avatar color="dark" radius="xl">
            VM
          </Avatar>
          <Separator gap={24} />
          <FullContainer css={{ flexDirection: 'column' }}>
            <Text color="white" variant="body3Regular">
              Varrel Marcellius
            </Text>
            <Separator gap={4} />
            <Text color="white" variant="body2Regular">
              Veniam aute sunt nostrud nulla proident veniam in ea proident. Non
              ea veniam laboris sint velit laborum excepteur cupidatat cupidatat
              ex eu mollit nulla. Esse Lorem magna qui culpa sint elit nisi.
              Magna voluptate pariatur irure amet minim do cupidatat incididunt
              ullamco nisi voluptate quis. Eu reprehenderit do amet enim
              reprehenderit.
            </Text>
            <Separator gap={8} />
            <Row>
              <Rating fractions={5} value={4.5} readOnly />
              <Separator gap={8} />
              <Text variant="caption1Regular" color="white">
                {format(new Date(), 'yyyy MMM dd')}
              </Text>
            </Row>
          </FullContainer>
        </Row>
        <Separator gap={24} />
        <Row>
          <Avatar color="grape" radius="xl">
            JL
          </Avatar>
          <Separator gap={24} />
          <FullContainer css={{ flexDirection: 'column' }}>
            <Text color="white" variant="body3Regular">
              Jovin Lidan
            </Text>
            <Separator gap={4} />
            <Text color="white" variant="body2Regular">
              Veniam aute sunt nostrud nulla proident veniam in ea proident. Non
              ea veniam laboris sint velit laborum excepteur cupidatat cupidatat
              ex eu mollit nulla. Esse Lorem magna qui culpa sint elit nisi.
              Magna voluptate pariatur irure amet minim do cupidatat incididunt
              ullamco nisi voluptate quis. Eu reprehenderit do amet enim
              reprehenderit.
            </Text>
            <Separator gap={8} />
            <Row>
              <Rating fractions={5} value={4.5} readOnly />
              <Separator gap={8} />
              <Text variant="caption1Regular" color="white">
                {format(new Date(), 'yyyy MMM dd')}
              </Text>
            </Row>
          </FullContainer>
        </Row>
      </PageContainer>
      <Separator gap={128} />
    </>
  );
}
