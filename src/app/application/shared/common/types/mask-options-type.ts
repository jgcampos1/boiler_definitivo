import { MaskOptionsEnum } from '../enums/mask-enum';

export type MaskOptions =
  | MaskOptionsEnum.CEP
  | MaskOptionsEnum.PHONE_NUMBER
  | MaskOptionsEnum.DOCUMENT;
