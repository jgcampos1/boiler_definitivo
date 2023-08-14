import react from 'react';
import { Navigate, type RouteProps } from 'react-router-dom';

import { IRoute } from '~/app/main/types/route-types';
import { ROUTES } from '~/app/main/types/routes-enum';

import { useAuth } from '../../hooks/use-auth';

type Props = RouteProps & {
  private: boolean;
  Layout: react.ElementType;
  route: IRoute;
};

const ProtectRoute = ({ private: isPrivate, Layout, element }: Props) => {
  const { isAuthenticated } = useAuth();

  const redirect = ROUTES?.LOGIN;

  if (!element) return <Navigate to={redirect} />;
  if (isPrivate) {
    return (
      <Layout>
        {isAuthenticated ? <>{element}</> : <Navigate to={redirect} />}
      </Layout>
    );
  }
  return <Layout>{element}</Layout>;
};

export default react.memo(ProtectRoute);
