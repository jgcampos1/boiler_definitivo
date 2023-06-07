import { MaskOptionsEnum } from '../enums';

export type MaskOptions =
  | MaskOptionsEnum.CEP
  | MaskOptionsEnum.PHONE_NUMBER
  | MaskOptionsEnum.DOCUMENT;
