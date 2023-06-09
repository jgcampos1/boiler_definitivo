import { CssBaseline } from '@material-ui/core';

import { Spinner, Container } from './full-page-loading-styles';

const FullPageLoading = () => (
  <Container>
    <CssBaseline />
    <Spinner />
  </Container>
);

export default FullPageLoading;
