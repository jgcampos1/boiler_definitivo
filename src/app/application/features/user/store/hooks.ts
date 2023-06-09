import { userApi } from './api';

export const {
  useGetUserProfileQuery,
  useLazyGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdatePasswordUserMutation
} = userApi;
