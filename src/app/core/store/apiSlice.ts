import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryAdapter } from './adapters/base-query-adapter';

export const apiSlice = createApi({
  baseQuery: baseQueryAdapter,
  endpoints: () => ({})
});
