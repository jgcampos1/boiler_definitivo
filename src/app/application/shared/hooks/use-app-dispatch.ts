import { useDispatch } from 'react-redux';

import { AppDispatch } from '~/app/core/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
