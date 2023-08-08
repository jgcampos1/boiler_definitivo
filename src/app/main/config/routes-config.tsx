import { authRoutes } from '~/app/application/features/auth/presentation/router';
import { generalRoutes } from '~/app/application/features/general/presentation/router';

export const appRoutes = [...authRoutes, ...generalRoutes];
