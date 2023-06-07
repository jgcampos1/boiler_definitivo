import { AddressModel } from '~/app/application/general/domain/address-model';

export type UserModel = {
  document: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: string;
  address?: AddressModel[];
  roles?: { id: string };
};
