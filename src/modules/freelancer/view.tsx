import { Rating } from '@mantine/core';
import { CheckCircle, Heart, Info } from '@phosphor-icons/react';
import colors from 'common/styles/colors';
import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import Header from 'components/widgets/header';
import {
  Container,
  HalfContainer,
  PageContainer,
  Row,
  SectionContainer,
} from 'modules/common/styles';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FullScreen } from 'modules/login/styles';
import { PackageContainer } from './styles';
import { string2moneyDefault } from 'common/utils/string';

export default function FreelanceShow() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const id = query['id'];

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
            <Text
              variant="body2Regular"
              color="white"
              css={{ '@md': typography.heading6Medium }}
            >
              Excepteur aliquip reprehenderit laborum dolore non duis ea do sint
              duis aliquip. Adipisicing velit excepteur est anim nostrud.
              Ullamco non occaecat fugiat exercitation nulla dolore laborum
              veniam. Magna proident enim consequat cupidatat irure officia
              irure nisi exercitation proident. Tempor et ex quis aute nisi elit
              proident amet do. Eiusmod qui commodo eu fugiat voluptate
              cupidatat Lorem in.
            </Text>
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
            {/* <img
              src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
              style={{ aspectRatio: '4/3' }}
              alt="person"
            /> */}
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

            <Text
              variant="body3Regular"
              color="white"
              css={{ '@md': typography.body2Regular }}
            >
              Voluptate est tempor officia dolor nostrud commodo mollit ut
              aliquip non deserunt occaecat est. Proident ipsum mollit non amet
              irure tempor aliquip nostrud est ea. Culpa cillum eiusmod pariatur
              eiusmod dolore deserunt ad duis nulla ea commodo. Nostrud sint
              aute anim nostrud dolore minim aliqua sit enim.
            </Text>
            <Separator gap={16} />
            <Row>
              <Rating value={4.5} fractions={4} readOnly />
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
            </Row>
            <Separator gap={16} />
            <Row>
              <Button variant="primary">Visit Profile</Button>
              <Separator gap={8} />
              <Heart color={colors.white} size={32} />
            </Row>
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
          <SectionContainer>
            <SectionContainer
              css={{
                flex: 1,
                gap: '24px',
                alignItems: 'flex-start',
              }}
            >
              <Container background="white">
                <Separator gap={16}>
                  <Text
                    variant="body1Medium"
                    css={{ '@md': typography.heading5Medium }}
                  >
                    Package A
                  </Text>
                  <Separator gap={4} />
                  <Text
                    variant="body3Regular"
                    css={{ '@md': typography.body2Regular }}
                  >
                    Nulla incididunt velit duis velit laboris eu tempor proident
                    incididunt adipisicing ut. Voluptate commodo veniam non ex
                    tempor. Proident minim tempor cupidatat do sit esse dolor
                    aute magna dolor incididunt nostrud minim do. Id nulla
                    occaecat do do velit.
                  </Text>
                  <Separator gap={16} />
                  {[
                    'Aliquip proident exercitation aute nisi minim cillum reprehenderit pariatur ea fugiat eiusmod tempor cupidatat.',
                    'Nisi eiusmod laboris minim pariatur.',
                    'Eu duis culpa anim id eiusmod commodo in non cillum do non incididunt.',
                  ].map((text) => (
                    <Row css={{ my: 4 }}>
                      <CheckCircle weight="bold" size={24} />
                      <Separator gap={4} />
                      <Text
                        variant="body3Medium"
                        css={{ maxWidth: '80%', '@md': typography.body2Medium }}
                      >
                        {text}
                      </Text>
                    </Row>
                  ))}
                </Separator>

                <hr />
                <Separator gap={16}>
                  <Text
                    variant="heading5Medium"
                    css={{ '@md': typography.heading4Medium }}
                  >
                    Rp {string2moneyDefault(384000)}
                  </Text>
                  <Text
                    variant="body1Regular"
                    css={{ '@md': typography.heading5Regular }}
                  >
                    $ {string2moneyDefault(25)}
                  </Text>
                </Separator>
              </Container>
              <Container background="white">
                <Separator gap={16}>
                  <Text
                    variant="body1Medium"
                    css={{ '@md': typography.heading5Medium }}
                  >
                    Package A
                  </Text>
                  <Separator gap={4} />
                  <Text
                    variant="body3Regular"
                    css={{ '@md': typography.body2Regular }}
                  >
                    Nulla incididunt velit duis velit laboris eu tempor proident
                    incididunt adipisicing ut. Voluptate commodo veniam non ex
                    tempor. Proident minim tempor cupidatat do sit esse dolor
                    aute magna dolor incididunt nostrud minim do. Id nulla
                    occaecat do do velit.
                  </Text>
                  <Separator gap={16} />
                  {[
                    'Aliquip proident exercitation aute nisi minim cillum reprehenderit pariatur ea fugiat eiusmod tempor cupidatat.',
                    'Nisi eiusmod laboris minim pariatur.',
                    'Eu duis culpa anim id eiusmod commodo in non cillum do non incididunt.',
                  ].map((text) => (
                    <Row css={{ my: 4 }}>
                      <CheckCircle weight="bold" size={24} />
                      <Separator gap={4} />
                      <Text
                        variant="body3Medium"
                        css={{ maxWidth: '80%', '@md': typography.body2Medium }}
                      >
                        {text}
                      </Text>
                    </Row>
                  ))}
                </Separator>

                <hr />
                <Separator gap={16}>
                  <Text
                    variant="heading5Medium"
                    css={{ '@md': typography.heading4Medium }}
                  >
                    Rp {string2moneyDefault(384000)}
                  </Text>
                  <Text
                    variant="body1Regular"
                    css={{ '@md': typography.heading5Regular }}
                  >
                    $ {string2moneyDefault(25)}
                  </Text>
                </Separator>
              </Container>
              <Container background="white">
                <Separator gap={16}>
                  <Text
                    variant="body1Medium"
                    css={{ '@md': typography.heading5Medium }}
                  >
                    Package A
                  </Text>
                  <Separator gap={4} />
                  <Text
                    variant="body3Regular"
                    css={{ '@md': typography.body2Regular }}
                  >
                    Nulla incididunt velit duis velit laboris eu tempor proident
                    incididunt adipisicing ut. Voluptate commodo veniam non ex
                    tempor. Proident minim tempor cupidatat do sit esse dolor
                    aute magna dolor incididunt nostrud minim do. Id nulla
                    occaecat do do velit.
                  </Text>
                  <Separator gap={16} />
                  {[
                    'Aliquip proident exercitation aute nisi minim cillum reprehenderit pariatur ea fugiat eiusmod tempor cupidatat.',
                    'Nisi eiusmod laboris minim pariatur.',
                    'Eu duis culpa anim id eiusmod commodo in non cillum do non incididunt.',
                  ].map((text) => (
                    <Row css={{ my: 4 }}>
                      <CheckCircle weight="bold" size={24} />
                      <Separator gap={4} />
                      <Text
                        variant="body3Medium"
                        css={{ maxWidth: '80%', '@md': typography.body2Medium }}
                      >
                        {text}
                      </Text>
                    </Row>
                  ))}
                </Separator>

                <hr />
                <Separator gap={16}>
                  <Text
                    variant="heading5Medium"
                    css={{ '@md': typography.heading4Medium }}
                  >
                    Rp {string2moneyDefault(384000)}
                  </Text>
                  <Text
                    variant="body1Regular"
                    css={{ '@md': typography.heading5Regular }}
                  >
                    $ {string2moneyDefault(25)}
                  </Text>
                </Separator>
              </Container>
            </SectionContainer>

            <Separator gap={48}>
              <Container css={{ alignItems: 'center' }}>
                <Text variant="heading5Regular" color="white">
                  Ready to book?
                </Text>
                <Button>Start Negotiation</Button>
              </Container>
            </Separator>
          </SectionContainer>
        </PackageContainer>
        <Separator gap={48} />
        <Text
          variant="heading5Medium"
          color="white"
          css={{ '@md': typography.heading4Medium }}
        >
          FAQ
        </Text>
        <Separator gap={48} />
        <Text
          variant="heading5Medium"
          color="white"
          css={{ '@md': typography.heading4Medium }}
        >
          Testimonials
        </Text>
      </PageContainer>
      <Separator gap={128} />
    </>
  );
}
