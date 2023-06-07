import { Route, Routes } from 'react-router-dom';

import { LayoutConfig } from '~/app/main/config/layout-config';
import { ProtectRoute } from '~/app/presentation/components';

import { type IRoute } from '../../types';

export const makeRoutes = (routes: IRoute[]) => {
  return routes.map((route) => {
    const Layout = LayoutConfig[route.layout].component;
    if (route.routes) {
      return (
        <Route
          key={route.name}
          element={
            <Routes location={location}>
              <Route
                path={route.path}
                key={route.path}
                element={
                  <ProtectRoute
                    Layout={Layout}
                    private={route.private ?? false}
                    element={<>{route.element}</>}
                    route={route}
                  />
                }
              />

              {route.routes.map((nested) => (
                <Route
                  path={nested.path}
                  key={nested.path}
                  element={
                    <ProtectRoute
                      Layout={Layout}
                      private={nested.private ?? false}
                      element={<>{nested.element}</>}
                      route={route}
                    />
                  }
                />
              ))}
            </Routes>
          }
        />
      );
    }

    return (
      <Routes key={route.path}>
        <Route
          path={route.path}
          element={
            <ProtectRoute
              Layout={Layout}
              private={route.private ?? false}
              element={route.element}
              route={route}
            />
          }
        />
      </Routes>
    );
  });
};
