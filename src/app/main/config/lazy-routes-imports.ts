import loadable from '@loadable/component';

export const Home = loadable(
  async () => import('~/app/presentation/pages/home/home'),
  {
    resolveComponent: (components) => components.default
  }
);
export const Register = loadable(
  async () =>
    import('~/app/application/auth/presentation/pages/register/register'),
  {
    resolveComponent: (components) => components.default
  }
);
export const Login = loadable(
  async () => import('~/app/application/auth/presentation/pages/login/login'),
  {
    resolveComponent: (components) => components.default
  }
);
export const ConfirmationToken = loadable(
  async () =>
    import(
      '~/app/presentation/pages/confirmation-token-page/confirmation-token'
    ),
  {
    resolveComponent: (components) => components.default
  }
);
export const RecoveryPassword = loadable(
  async () =>
    import(
      '~/app/application/auth/presentation/pages/recovery-password/recovery-password'
    ),
  {
    resolveComponent: (components) => components.default
  }
);

export const ResetPassword = loadable(
  async () =>
    import(
      '~/app/application/auth/presentation/pages/reset-password/reset-password'
    ),
  {
    resolveComponent: (components) => components.default
  }
);

export const Dashboard = loadable(
  async () => import('~/app/presentation/pages/dashboard/dashboard'),
  {
    resolveComponent: (components) => components.default
  }
);
export const User = loadable(
  async () => import('~/app/application/user/presentation/pages/user/user'),
  {
    resolveComponent: (components) => components.default
  }
);
