import { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { FullPageLoading } from '~/app/application/shared/components';
import ToastContainer from '~/app/application/shared/components/toast-container/toast-container';
import { theme } from '~/app/application/shared/styles/theme';
import { store } from '~/app/core/store/store';

import { appRoutes } from '../config/routes-config';
import { makeRoutes } from '../factories/routes/routes-factory';

const Router = () => {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <ToastContainer />
            {makeRoutes(appRoutes)}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
};

export default memo(Router);
