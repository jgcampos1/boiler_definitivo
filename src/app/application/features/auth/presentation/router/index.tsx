import { IRoute } from '~/app/main/types/route-types';

import { Home } from '../pages/home/home';

export const authRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    private: false,
    element: <Home />,
    layout: 'AuthFormLayout',
    roles: []
  }
];
