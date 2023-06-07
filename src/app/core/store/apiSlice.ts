import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryAdapter } from '~/app/core/store/adapters';

export const apiSlice = createApi({
  baseQuery: baseQueryAdapter,
  endpoints: () => ({})
});
