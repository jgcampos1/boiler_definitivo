import { authState } from '~/app/application/auth/store/selectors';
import { getToastState } from '~/app/application/general/toast/selectors/toast-selectors';
import { userState } from '~/app/application/user/store/selectors';
import { useAppSelector } from '~/app/core/store/store';

export const Auth = () => useAppSelector(authState);

export const Toast = () => useAppSelector(getToastState);

export const User = () => useAppSelector(userState);
