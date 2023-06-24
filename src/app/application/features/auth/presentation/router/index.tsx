import { IRoute } from '~/app/main/types/route-types';

import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';

export const authRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    private: false,
    element: <Home />,
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
  }
];
