import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { cacheStorage } from '~/app/core/infra/cache';
import { ROUTES } from '~/app/main/types/routes-enum';

import { AUTH_STORAGE_TOKENS } from '../../features/auth/domain/entities/auth-tokens';
import { setToken } from '../../features/auth/store/actions/set-token';
import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';
import { useQuery } from './use-query';
import { useUserTokenDecoder } from './use-user-token-decoder';

export const useAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken, ...rest } = useAppSelector(({ auth }) => auth);
  const [loading, setLoading] = useState(false);

  const { decodeFn } = useUserTokenDecoder();

  const accessTokenKey = AUTH_STORAGE_TOKENS.AUTH;
  const refreshTokenKey = AUTH_STORAGE_TOKENS.REFRESH_TOKEN;

  const query = useQuery();

  const redirectUrl = query.get('redirectUrl');

  const accessTokenStorage = cacheStorage.get<string>(accessTokenKey);
  const refreshTokenStorage = cacheStorage.get<string>(refreshTokenKey);

  useEffect(() => {
    if (!accessToken) {
      if (!accessTokenStorage) return;

      const decodedToken = decodeFn(accessTokenStorage);

      dispatch(
        setToken({
          accessToken: accessTokenStorage,
          refreshToken: refreshTokenStorage as string,
          ...decodedToken
        })
      );
    }
  }, [accessTokenStorage, refreshTokenStorage]);

  const redirectTo = (path: string) => {
    navigate(path, { replace: true });
    setLoading(false);
  };

  const logout = () => {
    cacheStorage.set(accessTokenKey, '');
    cacheStorage.set(refreshTokenKey, '');
    redirectTo(ROUTES.LOGIN);
  };

  const isAuthenticated = useMemo(
    () => !!accessToken || !!accessTokenStorage,
    [accessToken, accessTokenStorage]
  );

  const tokenFromQuery = query.get('accessToken');
  const refreshTokenFromQuery = query.get('refreshToken');
  const routeFromQuery = query.get('route');

  const redirectToRouteFromQuery = useCallback(() => {
    if (routeFromQuery) {
      redirectTo(routeFromQuery);
    }
  }, [routeFromQuery]);

  useEffect(() => {
    redirectToRouteFromQuery();
  }, [redirectToRouteFromQuery]);

  const setTokenFromQueryParams = useCallback(() => {
    if (tokenFromQuery && refreshTokenFromQuery) {
      cacheStorage.set(accessTokenKey, tokenFromQuery);
      cacheStorage.set(refreshTokenKey, refreshTokenFromQuery);

      const decodedToken = decodeFn(tokenFromQuery);

      dispatch(
        setToken({
          accessToken: tokenFromQuery,
          refreshToken: refreshTokenFromQuery,
          ...decodedToken
        })
      );
    }
  }, [tokenFromQuery, refreshTokenFromQuery]);

  useEffect(() => {
    setTokenFromQueryParams();
  }, [setTokenFromQueryParams]);

  useEffect(() => {
    const handleRedirect = () => {
      if (redirectUrl) {
        window.location.href = `${redirectUrl}&accessToken=${accessToken}&refreshToken=${rest.refreshToken}`;
      } else redirectTo(ROUTES.HOME);
    };

    if (accessToken && location.pathname === ROUTES.LOGIN) {
      handleRedirect();
    }
  }, []);

  useEffect(() => {
    if (accessToken && !accessTokenStorage) {
      cacheStorage.set(accessTokenKey, { accessToken, ...rest });
    }
  }, []);

  useEffect(() => {
    if (
      accessToken &&
      accessTokenStorage &&
      location.pathname === ROUTES.LOGIN
    ) {
      redirectTo(ROUTES.HOME);
    }
  }, []);

  return { isAuthenticated, loading, logout };
};
