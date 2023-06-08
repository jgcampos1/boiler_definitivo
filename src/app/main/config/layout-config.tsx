import AuthFormLayout from '~/app/application/auth/presentation/layout/auth-form-layout/auth-form-layout';
import DefaultLayout from '~/app/presentation/layout/default-layout/default-layout';
import UnauthorizedLayout from '~/app/presentation/layout/unauthorized-layout/unauthorized-layout';

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
