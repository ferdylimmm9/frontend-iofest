import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import breakpoints from 'common/styles/breakpoint';
import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
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

import SliderComponent from './components/card';
import { ImageContainer } from './styles';

function LabelContent(props: { label: string; content: string }) {
  return (
    <>
      <Row>
        <HalfContainer>
          <Text variant="heading6Regular" color="white">
            {props.label}
          </Text>
        </HalfContainer>
        <Separator gap={24} />
        <HalfContainer>
          <Text variant="heading6Regular" color="white">
            {props.content}
          </Text>
        </HalfContainer>
      </Row>
      <Separator gap={16} />
    </>
  );
}

export default function AboutIndex() {
  const mobile = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const informations = React.useMemo<{ label: string; content: string }[]>(
    () => [
      { label: 'Population:', content: '59,977,300 (mid 2022)' },
      { label: 'Area:', content: '473,481 km2' },
      { label: 'Timezone:', content: 'Waktu Indonesia Barat (UTC+7)' },
      {
        label: 'Ethnic Groups:',
        content: 'Acehnese, Batak, Gayonese, Lampung, Malay, etc.',
      },
      {
        label: 'Provinces:',
        content:
          'Aceh, North Sumatra, West Sumatra, Riau, Jambi, Bengkulu, South Sumatra, Lampung',
      },
      {
        label: 'Largest City:',
        content: 'Medan',
      },
    ],
    [],
  );

  const islands = React.useMemo<{ island: string; background: string }[]>(
    () => [
      {
        island: 'Sumatera',
        background: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
      },
      {
        island: 'Kalimantan',
        background: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
      },
      {
        island: 'Jawa',
        background: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
      },
      {
        island: 'Sulawesi',
        background: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
      },
      {
        island: 'Bali & NTT',
        background: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
      },
      {
        island: 'Papua',
        background: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
      },
    ],
    [],
  );

  return (
    <>
      <Header />
      <Separator gap={64} />
      <PageContainer>
        <Text
          variant="heading5Medium"
          color="white"
          align="center"
          css={{
            fontFamily: 'Playfair Display',
            '@md': {
              ...typography.heading3Medium,
              fontFamily: 'Playfair Display',
            },
          }}
        >
          Learn about Indonesia cultures
        </Text>
        <Separator gap={24} />
        <FullContainer>
          <iframe
            title="indonesia-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33106594.119471535!2d122.48555367099459!3d-2.427064791438866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1683039615431!5m2!1sen!2sid"
            width={mobile ? '300' : '600'}
            height={mobile ? '200' : '450'}
            style={{ border: 0, margin: 'auto' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FullContainer>
        <Separator gap={36} />
        <Text
          variant="body1Regular"
          color="white"
          align="justify"
          css={{ '@md': typography.heading5Light }}
        >
          Indonesia, officially the Republic of Indonesia, is a country in
          Southeast Asia and Oceania between the Indian and Pacific oceans. It
          consists of over 17,000 islands, including Sumatra, Java, Sulawesi,
          and parts of Borneo and New Guinea.
        </Text>
        <Separator gap={36} />
        <Carousel
          slideSize="20%"
          height={500}
          slideGap="md"
          loop
          align="start"
          dragFree
          withControls={false}
        >
          {islands.map((island) => (
            <Carousel.Slide key={island.island}>
              <SliderComponent
                title={island.island}
                background={island.background}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Text variant="heading4Medium" color="white">
          Sumatera
        </Text>
        <Separator gap={24} />
        <SectionContainer css={{ alignItems: 'flex-start' }}>
          <ImageContainer>
            <Image
              alt=""
              src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
              fill
              objectFit="cover"
            />
          </ImageContainer>
          <div>
            {informations.map((information) => (
              <LabelContent
                content={information.content}
                label={information.label}
              />
            ))}
          </div>
        </SectionContainer>
        <Separator gap={24} />
        <SectionContainer>
          <Text variant="heading5Regular" color="white" align="justify">
            Sumatra is one of the Sunda Islands of western Indonesia. It is the
            largest island that is fully within Indonesian territory, as well as
            the sixth-largest island in the world at 475,807.63 km2 (182,812
            mi.2), including adjacent islands such as the Simeulue, Nias,
            Mentawai, Enggano, Riau Islands, Bangka Belitung and Krakatoa
            archipelago. Sumatra is an elongated landmass spanning a diagonal
            northwest–southeast axis. The Indian Ocean borders the northwest,
            west, and southwest coasts of Sumatra, with the island chain of
            Simeulue, Nias, Mentawai, and Enggano off the western coast. In the
            northeast, the narrow Strait of Malacca separates the island from
            the Malay Peninsula, which is an extension of the Eurasian
            continent. In the southeast, the narrow Sunda Strait, containing the
            Krakatoa Archipelago, separates Sumatra from Java. The northern tip
            of Sumatra is near the Andaman Islands, while off the southeastern
            coast lie the islands of Bangka and Belitung, Karimata Strait and
            the Java Sea. The Bukit Barisan mountains, which contain several
            active volcanoes, form the backbone of the island, while the
            northeastern area contains large plains and lowlands with swamps,
            mangrove forest and complex river systems. The equator crosses the
            island at its centre in West Sumatra and Riau provinces. The climate
            of the island is tropical, hot, and humid. Lush tropical rain forest
            once dominated the landscape.
          </Text>
        </SectionContainer>
      </PageContainer>
      <Separator gap={128} />
    </>
  );
}
