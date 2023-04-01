import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import colors from 'common/styles/colors';
import Separator from 'components/common/separator';
import Text from 'components/common/text';
import Button from 'components/elements/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import {
  BrandContainer,
  HeaderInnerContainer,
  HeaderOuterContainer,
  LinkStyled,
  DesktopNavigationContainer,
  BurgerButton,
} from './styles';

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { push } = useRouter();

  const menus = React.useMemo<{ href: string; title: string }[]>(
    () => [
      { href: '/about-indonesia', title: 'About Indonesia' },
      { href: '/freelancers', title: 'Find Freelancers' },
    ],
    [],
  );

  return (
    <>
      <HeaderOuterContainer>
        <HeaderInnerContainer>
          <BrandContainer>
            <Link href="/" passHref>
              <Text color="white" variant="heading4Medium">
                Logo
              </Text>
            </Link>
          </BrandContainer>
          <DesktopNavigationContainer>
            <LinkStyled href="/about-indonesia">About Indonesia</LinkStyled>
            <LinkStyled href="/freelancers">Find Freelancers</LinkStyled>
            <Button
              variant="primary"
              size="medium"
              onClick={() => push('/login')}
            >
              Sign Up
            </Button>
          </DesktopNavigationContainer>
          <BurgerButton opened={opened} onClick={toggle} color={colors.white} />
        </HeaderInnerContainer>
      </HeaderOuterContainer>
      <Separator gap={80} />
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        {menus.map((menu) => (
          <LinkStyled href={menu.href} passHref>
            <Text color="primary">{menu.title}</Text>
          </LinkStyled>
        ))}
      </Drawer>
    </>
  );
}
