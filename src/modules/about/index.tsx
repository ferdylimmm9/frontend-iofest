import { Paper } from '@mantine/core';
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
import { DesktopView, MobileView } from 'modules/home/styles';

export default function AboutIndex() {
  const mobile = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <>
      <Header />
      <Separator gap={64} />
      <PageContainer>
        <Text
          variant="heading3Medium"
          color="white"
          align="center"
          css={{
            fontFamily: 'Playfair Display',
            '@md': {
              ...typography.heading1Medium,
              fontFamily: 'Playfair Display',
            },
          }}
        >
          Learn about Indonesia cultures
        </Text>
        <Separator gap={64} />
        <SectionContainer>
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
        </SectionContainer>
      </PageContainer>
      <Separator gap={128} />
    </>
  );
}
