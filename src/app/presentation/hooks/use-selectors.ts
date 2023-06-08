import { authState } from '~/app/application/auth/store/selectors';
import { getToastState } from '~/app/application/general/toast/selectors/toast-selectors';
import { userState } from '~/app/application/user/store/selectors';
import { useAppSelector } from '~/app/core/store/store';

const Auth = () => useAppSelector(authState);

const Toast = () => useAppSelector(getToastState);

const User = () => useAppSelector(userState);

export const useSelectors = { Auth, Toast, User };
