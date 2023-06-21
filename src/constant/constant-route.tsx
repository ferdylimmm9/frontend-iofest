import { AddressBook, Basket, Images, Newspaper } from '@phosphor-icons/react';

export const UserRoute = {
  products: 'products',
  about: 'about-us',
  contact: 'contact-us',
  home: '/',
};

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
