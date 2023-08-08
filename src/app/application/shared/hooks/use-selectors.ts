import { authState } from '~/app/application/features/auth/store/selectors';
import { getToastState } from '~/app/application/features/general/toast/selectors/toast-selectors';
import { useAppSelector } from '~/app/core/store/store';

const Auth = () => useAppSelector(authState);

const Toast = () => useAppSelector(getToastState);

export const useSelectors = { Auth, Toast };
