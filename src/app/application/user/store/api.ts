import { apiSlice } from '~/app/core/store/apiSlice';

import {
  GetUserProfile,
  getUserProfileService
} from '../application/services/get-user-profile';
import {
  type UpdatePasswordUser,
  updatePasswordUserService
} from '../application/services/update-password-user';
import {
  type UpdateUserProfile,
  updateUserProfileService
} from '../application/services/update-user-profile';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<
      GetUserProfile.Response,
      GetUserProfile.Params
    >({
      query: (params) => ({
        service: getUserProfileService,
        params
      })
    }),
    updateUserProfile: builder.mutation<
      UpdateUserProfile.Response,
      UpdateUserProfile.Params
    >({
      query: (params) => ({
        service: updateUserProfileService,
        params
      })
    }),
    updatePasswordUser: builder.mutation<
      UpdatePasswordUser.Response,
      UpdatePasswordUser.Params
    >({
      query: (params) => ({
        service: updatePasswordUserService,
        params
      })
    })
  })
});
