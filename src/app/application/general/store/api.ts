import { apiSlice } from '~/app/core/store/apiSlice';

import { type AddressInfo, addressInfoService } from '../services/address-info';

export const generalApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addressInfo: builder.query<AddressInfo.Response, AddressInfo.Params>({
      query: (params) => ({
        service: addressInfoService,
        params
      })
    })
  })
});
