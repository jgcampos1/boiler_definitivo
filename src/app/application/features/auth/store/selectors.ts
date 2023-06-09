import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '~/app/core/store/types';

const authSliceSelector = (state: RootState) => state.auth;

export const authState = createSelector(authSliceSelector, (state) => state);
