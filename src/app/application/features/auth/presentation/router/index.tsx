import { IRoute } from '~/app/main/types/route-types';

import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Login } from '../pages/login/login';
import { ResetPassword } from '../pages/reset-password/reset-password';

export const authRoutes: IRoute[] = [
  {
    path: '/login',
    name: 'Login',
    private: false,
    element: <Login />,
    layout: 'AuthFormLayout',
    roles: []
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    private: false,
    element: <ForgotPassword />,
    layout: 'AuthFormLayout',
    roles: []
  },
  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    private: false,
    element: <ResetPassword />,
    layout: 'AuthFormLayout',
    roles: []
  }
];
