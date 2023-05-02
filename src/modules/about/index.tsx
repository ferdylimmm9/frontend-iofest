import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import breakpoints from 'common/styles/breakpoint';
import typography from 'common/styles/typography';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Header from 'components/widgets/header';
import {
  FullContainer,
  PageContainer,
  SectionContainer,
} from 'modules/common/styles';
import Image from 'next/image';
import * as React from 'react';

import SliderComponent from './components/card';
import LabelContent from './components/label-content';
import SpoilerCard from './components/spoiler-card';
import { ImageContainer } from './styles';

export default function AboutIndex() {
  const mobile = useMediaQuery(`(max-width: ${breakpoints.md})`);

  const informations = React.useMemo<{ label: string; content: string }[]>(
    () => [
      { label: 'Population', content: ': 59,977,300 (mid 2022)' },
      { label: 'Area', content: ': 473,481 km2' },
      { label: 'Timezone', content: ': Waktu Indonesia Barat (UTC+7)' },
      {
        label: 'Ethnic Groups',
        content: ': Acehnese, Batak, Gayonese, Lampung, Malay, etc.',
      },
      {
        label: 'Provinces',
        content:
          ': Aceh, North Sumatra, West Sumatra, Riau, Jambi, Bengkulu, South Sumatra, Lampung',
      },
      {
        label: 'Largest City',
        content: ': Medan',
      },
    ],
    [],
  );

  const islands = React.useMemo<{ island: string; background: string }[]>(
    () => [
      {
        island: 'Sumatera',
        background: '/assets/fake-image.png',
      },
      {
        island: 'Kalimantan',
        background: '/assets/fake-image.png',
      },
      {
        island: 'Jawa',
        background: '/assets/fake-image.png',
      },
      {
        island: 'Sulawesi',
        background: '/assets/fake-image.png',
      },
      {
        island: 'Bali & NTT',
        background: '/assets/fake-image.png',
      },
      {
        island: 'Papua',
        background: '/assets/fake-image.png',
      },
    ],
    [],
  );

  const newsList = React.useMemo<
    { title: string; description: string; content: string; image: string }[]
  >(
    () => [
      {
        title: 'Elit sunt ut sint consectetur eiusmod.',
        description: 'Excepteur eiusmod eiusmod anim ad fugiat.',
        content:
          'Sint excepteur enim elit aliquip excepteur mollit fugiat deserunt fugiat. Labore non qui qui ullamco quis ex esse eiusmod quis quis qui occaecat veniam. Id ex amet cillum reprehenderit cupidatat incididunt excepteur officia sunt.Irure elit eu incididunt quis mollit incididunt esse tempor duis. Tempor eu exercitation cillum cupidatat consequat. Non ipsum ad tempor cillum. Ut officia occaecat occaecat sunt. Amet eu ipsum non reprehenderit amet labore. Incididunt quis enim exercitation et.Amet proident voluptate dolor labore sit deserunt. Qui sit commodo proident incididunt minim irure mollit est qui cupidatat esse. Consequat labore veniam duis quis culpa nisi sit dolore adipisicing ex veniam elit incididunt ipsum. Incididunt eu laboris id culpa esse consectetur aute fugiat consectetur tempor id adipisicing consectetur amet. Ea id sint ut nostrud mollit esse minim consequat cillum exercitation ex cillum magna eu. Consectetur aliqua non tempor officia fugiat sunt ut consectetur dolor culpa ullamco voluptate laborum adipisicing. Lorem ullamco aliqua magna aute nostrud Lorem Lorem esse velit amet ex. Excepteur velit aute exercitation dolore ad ad dolore. Labore magna excepteur nulla occaecat labore commodo voluptate commodo ad ad.',
        image: '/assets/fake-image.png',
      },
      {
        title: 'Elit sunt ut sint consectetur eiusmod.',
        description: 'Excepteur eiusmod eiusmod anim ad fugiat.',
        content:
          'Sint excepteur enim elit aliquip excepteur mollit fugiat deserunt fugiat. Labore non qui qui ullamco quis ex esse eiusmod quis quis qui occaecat veniam. Id ex amet cillum reprehenderit cupidatat incididunt excepteur officia sunt.Irure elit eu incididunt quis mollit incididunt esse tempor duis. Tempor eu exercitation cillum cupidatat consequat. Non ipsum ad tempor cillum. Ut officia occaecat occaecat sunt. Amet eu ipsum non reprehenderit amet labore. Incididunt quis enim exercitation et.Amet proident voluptate dolor labore sit deserunt. Qui sit commodo proident incididunt minim irure mollit est qui cupidatat esse. Consequat labore veniam duis quis culpa nisi sit dolore adipisicing ex veniam elit incididunt ipsum. Incididunt eu laboris id culpa esse consectetur aute fugiat consectetur tempor id adipisicing consectetur amet. Ea id sint ut nostrud mollit esse minim consequat cillum exercitation ex cillum magna eu. Consectetur aliqua non tempor officia fugiat sunt ut consectetur dolor culpa ullamco voluptate laborum adipisicing. Lorem ullamco aliqua magna aute nostrud Lorem Lorem esse velit amet ex. Excepteur velit aute exercitation dolore ad ad dolore. Labore magna excepteur nulla occaecat labore commodo voluptate commodo ad ad.',
        image: '/assets/fake-image.png',
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
              alt="fake-image"
              src="/assets/fake-image.png"
              fill
              objectFit="cover"
            />
          </ImageContainer>
          <Separator gap={24} />
          <FullContainer css={{ flexDirection: 'column' }}>
            {informations.map((information) => (
              <LabelContent
                content={information.content}
                label={information.label}
              />
            ))}
          </FullContainer>
        </SectionContainer>
        <Separator gap={24} />
        <SectionContainer css={{ alignItems: 'flex-start' }}>
          <div style={{ flex: 2 }}>
            <Text variant="heading5Regular" color="white" align="justify">
              Sumatra is one of the Sunda Islands of western Indonesia. It is
              the largest island that is fully within Indonesian territory, as
              well as the sixth-largest island in the world at 475,807.63 km2
              (182,812 mi.2), including adjacent islands such as the Simeulue,
              Nias, Mentawai, Enggano, Riau Islands, Bangka Belitung and
              Krakatoa archipelago. Sumatra is an elongated landmass spanning a
              diagonal northwest–southeast axis. The Indian Ocean borders the
              northwest, west, and southwest coasts of Sumatra, with the island
              chain of Simeulue, Nias, Mentawai, and Enggano off the western
              coast. In the northeast, the narrow Strait of Malacca separates
              the island from the Malay Peninsula, which is an extension of the
              Eurasian continent. In the southeast, the narrow Sunda Strait,
              containing the Krakatoa Archipelago, separates Sumatra from Java.
              The northern tip of Sumatra is near the Andaman Islands, while off
              the southeastern coast lie the islands of Bangka and Belitung,
              Karimata Strait and the Java Sea. The Bukit Barisan mountains,
              which contain several active volcanoes, form the backbone of the
              island, while the northeastern area contains large plains and
              lowlands with swamps, mangrove forest and complex river systems.
              The equator crosses the island at its centre in West Sumatra and
              Riau provinces. The climate of the island is tropical, hot, and
              humid. Lush tropical rain forest once dominated the landscape.
            </Text>
          </div>
          <Separator gap={24} />
          <div style={{ flex: 1 }}>
            {newsList.map((news) => (
              <SpoilerCard
                content={news.content}
                description={news.description}
                image={news.image}
                title={news.title}
              />
            ))}
          </div>
        </SectionContainer>
      </PageContainer>
      <Separator gap={128} />
    </>
  );
}
