import { tokenDecoder } from '~/app/core/infra/decoder/jwt-token-decoder';

import { LocalDecodeUserToken } from './decoder-user-token';

export const decoderLoginService: LocalDecodeUserToken =
  new LocalDecodeUserToken(tokenDecoder);

export type { LocalDecodeUserToken };
