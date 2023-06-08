import { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { store } from '~/app/core/store/store';
import { FullPageLoading } from '~/app/presentation/components';
import ToastContainer from '~/app/presentation/components/toast-container/toast-container';
import { theme } from '~/app/presentation/styles/theme';

import { RoutesConfig } from '../config/routes-config';
import { makeRoutes } from '../factories/routes/routes-factory';

const Router = () => {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <ToastContainer />
            {makeRoutes(RoutesConfig)}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
};

export default memo(Router);
