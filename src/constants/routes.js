import { APP_ROUTES } from './appRoutes';

export const routes = {
  Home: {
    href: APP_ROUTES.Home,
    component: 'home-page',
  },
  Gallery: {
    href: APP_ROUTES.Gallery,
    component: 'gallery-page',
  },
  Contacts: {
    href: APP_ROUTES.Contacts,
    component: 'contacts-page',
  },
  Workshops: {
    href: APP_ROUTES.Workshops,
    component: 'workshop-page',
  },
  FAQ: {
    href: APP_ROUTES.FAQ,
    component: 'faq-page',
  },
  Shop: {
    href: APP_ROUTES.Shop,
    component: 'shop-page',
  },
  Cart: {
    href: APP_ROUTES.cart,
    component: 'cart-page',
  },
  Admin: {
    href: APP_ROUTES.admin,
    component: 'admin-page',
  },
  signUp: {
    href: APP_ROUTES.signUp,
    component: 'sign-up-page',
  },
  signIn: {
    href: APP_ROUTES.signIn,
    component: 'sign-in-page',
  },
  signOut: {
    href: APP_ROUTES.signOut,
    component: 'sign-out-page',
  },
  Error: {
    href: '*',
    component: 'error-page',
  },
  productView: {
    href: APP_ROUTES.product,
    component: 'product-page',
  },
};
