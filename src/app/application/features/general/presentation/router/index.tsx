import loadable from '@loadable/component';
import { IRoute } from '~/app/main/types/route-types';

const Dashboard = loadable(
  async () =>
    import(
      '~/app/application/features/general/presentation/pages/dashboard/dashboard'
    ),
  {
    resolveComponent: (components) => components.default
  }
);

const Home = loadable(
  async () =>
    import('~/app/application/features/general/presentation/pages/home/home'),
  {
    resolveComponent: (components) => components.default
  }
);

export const generalRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    private: true,
    element: <Home />,
    layout: 'AuthFormLayout',
    roles: []
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    private: true,
    element: <Dashboard />,
    layout: 'DefaultLayout',
    roles: []
  }
];
