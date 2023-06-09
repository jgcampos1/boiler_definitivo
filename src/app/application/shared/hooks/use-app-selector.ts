import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppState } from '~/app/core/store/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
