import { AddressModel } from '~/app/application/general/domain/address-model';

export type UpdateUserModel = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address?: AddressModel;
};
