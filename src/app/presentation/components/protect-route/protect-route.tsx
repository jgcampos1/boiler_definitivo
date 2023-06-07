import react from 'react';
import { Navigate, type RouteProps } from 'react-router-dom';

import { IRoute, ROUTES } from '~/app/main/types';
import { useAuth } from '~/app/presentation/hooks';

type Props = RouteProps & {
  private: boolean;
  Layout: react.ElementType;
  route: IRoute;
};

const ProtectRoute = ({
  private: isPrivate,
  Layout,
  route,
  element
}: Props) => {
  const { isAuthenticated, user } = useAuth();

  const redirectHome = ROUTES?.HOME;
  const returnDashboard = ROUTES?.DASHBOARD;
  const hasAllowedRoles =
    route?.roles.length === 0
      ? true
      : user?.roles.some((role) => route.roles.includes(role.name));

  if (!hasAllowedRoles) return <Navigate to={returnDashboard} />;

  if (!element) return <Navigate to={redirectHome} />;
  if (isPrivate) {
    return (
      <Layout>
        {isAuthenticated ? <>{element}</> : <Navigate to={redirectHome} />}
      </Layout>
    );
  }
  return <Layout>{element}</Layout>;
};

export default react.memo(ProtectRoute);
