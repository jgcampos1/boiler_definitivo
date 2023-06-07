import {
  DefaultLayout,
  UnauthorizedLayout,
  AuthFormLayout
} from '~/app/presentation/layout';

export const LayoutConfig = {
  DefaultLayout: {
    name: 'DefaultLayout',
    component: DefaultLayout
  },
  UnauthorizedLayout: {
    name: 'UnauthorizedLayout',
    component: UnauthorizedLayout
  },
  AuthFormLayout: {
    name: 'AuthFormLayout',
    component: AuthFormLayout
  }
} as const;
