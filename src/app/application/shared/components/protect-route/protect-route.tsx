import react from 'react';
import { type RouteProps } from 'react-router-dom';

import { IRoute } from '~/app/main/types/route-types';

type Props = RouteProps & {
  private: boolean;
  Layout: react.ElementType;
  route: IRoute;
};

const ProtectRoute = ({ Layout, element }: Props) => {
  return <Layout>{element}</Layout>;
};

export default react.memo(ProtectRoute);
