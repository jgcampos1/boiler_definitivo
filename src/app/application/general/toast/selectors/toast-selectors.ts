import { createSelector } from 'reselect';
import { AppState } from '~/app/core/store/store';

const toastSliceSelector = (state: AppState) => state.toastSlice;

export const getToastState = createSelector(toastSliceSelector, (toast) => {
  return toast;
});
