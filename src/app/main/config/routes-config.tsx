import { type IRoute } from '../types';
import {
  Home,
  Register,
  Login,
  ConfirmationToken,
  RecoveryPassword,
  ResetPassword,
  Dashboard,
  User
} from './lazy-routes-imports';

export const RoutesConfig: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    private: false,
    element: <Home />,
    layout: 'UnauthorizedLayout',
    roles: []
  },
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
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    private: true,
    element: <Dashboard />,
    layout: 'DefaultLayout',
    roles: []
  },
  {
    path: '/user',
    name: 'User',
    private: true,
    element: <User />,
    layout: 'DefaultLayout',
    roles: ['User']
  }
];
