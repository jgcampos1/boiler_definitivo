import loadable from '@loadable/component';
import { IRoute } from '~/app/main/types/route-types';

const Register = loadable(
  async () =>
    import(
      '~/app/application/features/auth/presentation/pages/register/register'
    ),
  {
    resolveComponent: (components) => components.default
  }
);
const Login = loadable(
  async () =>
    import('~/app/application/features/auth/presentation/pages/login/login'),
  {
    resolveComponent: (components) => components.default
  }
);
const ConfirmationToken = loadable(
  async () =>
    import(
      '~/app/application/features/auth/presentation/pages/confirmation-token-page/confirmation-token'
    ),
  {
    resolveComponent: (components) => components.default
  }
);
const RecoveryPassword = loadable(
  async () =>
    import(
      '~/app/application/features/auth/presentation/pages/recovery-password/recovery-password'
    ),
  {
    resolveComponent: (components) => components.default
  }
);

const ResetPassword = loadable(
  async () =>
    import(
      '~/app/application/features/auth/presentation/pages/reset-password/reset-password'
    ),
  {
    resolveComponent: (components) => components.default
  }
);

export const authRoutes: IRoute[] = [
  {
    path: '/register',
    name: 'Register',
    private: false,
    element: <Register />,
    layout: 'AuthFormLayout',
    roles: []
  },
  {
    path: '/login',
    name: 'Login',
    private: false,
    element: <Login />,
    layout: 'AuthFormLayout',
    roles: []
  },
  {
    path: '/recovery',
    name: 'RecoveryPassword',
    private: false,
    element: <RecoveryPassword />,
    layout: 'AuthFormLayout',
    roles: []
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    private: false,
    element: <ResetPassword />,
    layout: 'AuthFormLayout',
    roles: []
  },
  {
    path: '/confirm-account',
    name: 'ConfirmationToken',
    private: false,
    element: <ConfirmationToken />,
    layout: 'UnauthorizedLayout',
    roles: []
  }
];
