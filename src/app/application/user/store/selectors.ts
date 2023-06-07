import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '~/app/core/store/types';

const userSliceSelector = (state: RootState) => state.user;

export const userState = createSelector(userSliceSelector, (state) => state);
