import {
  AppShell,
  Navbar,
  Header,
  ScrollArea,
  Flex,
  Text,
  Button,
  MediaQuery,
  Burger,
  Box,
  Paper,
} from '@mantine/core';
import {
  SignOut,
  AddressBook,
  Basket,
  Images,
  Newspaper,
} from '@phosphor-icons/react';
// import { onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import * as React from 'react';

import assets from '../../assets/png';

interface Props {
  children?: React.ReactNode;
}

export const AdminRoute: {
  [x: string]: { link: string; Icon: React.ReactNode; label: string };
} = {
  banners: {
    link: '/admin/banners',
    Icon: <Images size={18} />,
    label: 'common:banners',
  },
  products: {
    link: '/admin/products',
    Icon: <Basket size={18} />,
    label: 'common:products',
  },
  news: {
    link: '/admin/news',
    Icon: <Newspaper size={18} />,
    label: 'common:news',
  },
  contacts: {
    link: '/admin/contacts',
    Icon: <AddressBook size={18} />,
    label: 'common:contacts',
  },
};

export default function AdminLayout(props: Props) {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  const router = useRouter();
  const [opened, setOpened] = React.useState(false);

  const isCurrentPath = React.useCallback(
    (path: string) => {
      const currentPath = router.pathname.split('/')[2];
      const linkPath = path.split('/')[2];
      return currentPath === linkPath;
    },
    [router.pathname],
  );

  React.useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (!user) {
    //     router.replace('/admin/login');
    //   }
    // });
  }, [router]);

  return (
    <AppShell
      fixed={false}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          width={{ base: 300 }}
          hiddenBreakpoint="sm"
          hidden={!opened}
          p="xs"
        >
          <Navbar.Section grow mt="xs" component={ScrollArea}>
            <Flex direction="column" gap="lg">
              {Object.keys(AdminRoute).map((key) => (
                <Button
                  size="xl"
                  variant={
                    isCurrentPath(AdminRoute[key].link) ? 'light' : 'subtle'
                  }
                  leftIcon={AdminRoute[key].Icon}
                  onClick={() => router.push(AdminRoute[key].link)}
                >
                  <Text>{t(AdminRoute[key].label)}</Text>
                </Button>
              ))}
            </Flex>
            {/* <MainLinks /> */}
          </Navbar.Section>
          <Navbar.Section>
            {/* <User /> */}
            <Text align="center" fw={800} fz={16} mb={16}>
              {/* {auth.currentUser?.email} */} Username
            </Text>
            <Button
              fullWidth
              size="xl"
              color="red"
              variant="subtle"
              leftIcon={<SignOut size={20} />}
              onClick={() => {
                router.replace('/admin/login');
              }}
            >
              Keluar
            </Button>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                // color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Link href="/admin">
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Paper h={36} w={64} />
              </MediaQuery>
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Paper h={48} w={64} />
              </MediaQuery>
            </Link>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          // backgroundColor:
          //   theme.colorScheme === 'dark'
          //     ? theme.colors.dark[8]
          //     : theme.colors.gray[0],
          padding: 0,
        },
      })}
    >
      <ScrollArea
        type="always"
        sx={{
          height:
            'calc(100vh - var(--mantine-header-height, 0px) - var(--mantine-footer-height, 0px))', // viewport height - height of header - height of footer
        }}
      >
        <Box // our new canvas body
          p={0} // re-apply mantine main component padding
          sx={{
            minWidth: `calc(100vw - ${
              2 * 0
            }px - var(--mantine-aside-width, 0px) - var(--mantine-navbar-width, 0px))`, // viewport width - 2*padding - aside width - navbar width
            minHeight: `calc(100vh - ${
              2 * 0
            }px - var(--mantine-header-height, 0px) - var(--mantine-footer-height, 0px))`, // viewport height - 2*padding - header height - footer height
          }}
        >
          {props.children}
        </Box>
      </ScrollArea>
    </AppShell>
  );
}

// export const usage: MantineDemo = {
//   type: 'demo',
//   component: Demo,
//   demoProps: { spacing: false },
//   code,
// };
