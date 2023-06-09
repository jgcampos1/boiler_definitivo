import { authRoutes } from '~/app/application/features/auth/presentation/router';
import { generalRoutes } from '~/app/application/features/general/presentation/router';
import { userRoutes } from '~/app/application/features/user/presentation/router';

export const appRoutes = [...authRoutes, ...userRoutes, ...generalRoutes];
