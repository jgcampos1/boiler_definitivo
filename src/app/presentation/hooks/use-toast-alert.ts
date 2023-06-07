import { useEffect } from 'react';

import { ToastType } from '~/app/presentation/common/types';
import { useToast } from '~/app/presentation/hooks/use-toast';
import { useTranslation } from '~/app/presentation/hooks/use-translation';

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
