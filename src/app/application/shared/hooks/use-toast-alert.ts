import { useEffect } from 'react';

import { useToast } from '~/app/application/shared/hooks/use-toast';
import { useTranslation } from '~/app/application/shared/hooks/use-translation';

import { ToastType } from '../common/types/toast-types';

interface ApiStatusResponse {
  error?: unknown;
  isError?: unknown;
  isSuccess?: unknown;
  successMessage?: string;
  onError?: any;
  onSuccess?: any;
}

export const useToastAlert = ({
  error,
  isError,
  isSuccess,
  onError,
  onSuccess,
  successMessage
}: ApiStatusResponse) => {
  const { addToast } = useToast();
  const { translate } = useTranslation();

  useEffect(() => {
    if (!isError || !error) return;

    addToast({
      type: ToastType.ERROR,
      text: (error as { message: string }).message
    });

    if (onError) onError?.();
  }, [isError, error]);

  useEffect(() => {
    if (!isSuccess || !successMessage) return;

    addToast({
      type: ToastType.SUCCESS,
      text: translate(successMessage)
    });

    if (onSuccess) onSuccess?.();
  }, [isSuccess, successMessage]);
};