import { APP_ROUTES } from './appRoutes';

export const appPages = [
  {
    label: 'Home',
    href: APP_ROUTES.Home,
  },
  {
    href: APP_ROUTES.Shop,
    label: 'Shop',
  },
  {
    href: APP_ROUTES.Gallery,
    label: 'Gallery',
  },
  // {
  //   href: APP_ROUTES.About,
  //   label: 'About',
  // },
  {
    href: APP_ROUTES.FAQ,
    label: 'FAQ',
  },
  {
    href: APP_ROUTES.Workshops,
    label: 'Workshops',
  },
  {
    href: APP_ROUTES.Contacts,
    label: 'Contacts',
  },
  {
    href: APP_ROUTES.admin,
    label: 'Admin',
  },
  {
    href: APP_ROUTES.signUp,
    label: 'SignUp',
  },
  {
    href: APP_ROUTES.signIn,
    label: 'SignIn',
  },
  {
    href: APP_ROUTES.signOut,
    label: 'SignOut',
  },
];
