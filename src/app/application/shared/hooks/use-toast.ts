import { useCallback } from 'react';

import { addToast } from '~/app/application/features/general/toast/actions/add-toast';
import { removeToast } from '~/app/application/features/general/toast/actions/remove-toast';
import { ToastTypes } from '~/app/application/features/general/toast/types/toast-types';

import { ToastType } from '../common/types/toast-types';
import { useAppDispatch } from './use-app-dispatch';

type PropsToast = {
  text: string;
  type: ToastTypes;
};
export const useToast = () => {
  const dispatch = useAppDispatch();

  const addNewToast = useCallback(
    ({ text, type }: PropsToast) => {
      const toast = {
        type,
        text: text
      };

      dispatch(addToast(toast));
    },
    [dispatch]
  );

  const showSuccess = useCallback(
    (text: string) => addNewToast({ type: ToastType.SUCCESS, text }),
    []
  );

  const showError = useCallback((error: unknown | string) => {
    const text =
      typeof error === 'string'
        ? error
        : (error as { message: string }).message;
    return addNewToast({ type: ToastType.ERROR, text });
  }, []);

  const showInfo = useCallback(
    (text: string) => addNewToast({ type: ToastType.INFO, text }),
    []
  );

  const deleteToast = useCallback(
    (id: string) => {
      dispatch(removeToast({ id }));
    },
    [dispatch]
  );

  return {
    addToast: addNewToast,
    removeToast: deleteToast,
    showSuccess,
    showError,
    showInfo
  };
};
