import loadable from '@loadable/component';
import { IRoute } from '~/app/main/types/route-types';

const User = loadable(
  async () =>
    import('~/app/application/features/user/presentation/pages/user/user'),
  {
    resolveComponent: (components) => components.default
  }
);

export const userRoutes: IRoute[] = [
  {
    path: '/user',
    name: 'User',
    private: true,
    element: <User />,
    layout: 'DefaultLayout',
    roles: ['User']
  }
];
