import { authState } from '~/app/application/features/auth/store/selectors';
import { getToastState } from '~/app/application/features/general/toast/selectors/toast-selectors';
import { userState } from '~/app/application/features/user/store/selectors';
import { useAppSelector } from '~/app/core/store/store';

const Auth = () => useAppSelector(authState);

const Toast = () => useAppSelector(getToastState);

const User = () => useAppSelector(userState);

export const useSelectors = { Auth, Toast, User };
