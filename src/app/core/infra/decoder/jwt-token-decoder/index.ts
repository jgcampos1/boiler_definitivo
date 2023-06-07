import type { TokenDecoder } from '~/app/core/application/protocols/token-decoder';

import { JWTTokenDecoder } from './jwt-token-decoder';

export const tokenDecoder: TokenDecoder = new JWTTokenDecoder();
