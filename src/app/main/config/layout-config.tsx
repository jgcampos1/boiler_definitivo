import AuthFormLayout from '~/app/application/shared/layout/auth-form-layout/auth-form-layout';
import DefaultLayout from '~/app/application/shared/layout/default-layout/default-layout';
import UnauthorizedLayout from '~/app/application/shared/layout/unauthorized-layout/unauthorized-layout';

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
