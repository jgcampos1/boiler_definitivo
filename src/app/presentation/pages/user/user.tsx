import { useEffect } from 'react';

import { useLazyAddressInfoQuery } from '~/app/application/general/store/hooks';
import {
  useLazyGetUserProfileQuery,
  useUpdateUserProfileMutation
} from '~/app/application/user/store';

import { MaskOptionsEnum } from '../../common/enums';
import { ContainerGrid, ChangePasswordIcon } from '../../components';
import {
  useMaskFormatter,
  useSelectors,
  useToastAlert,
  useToggle
} from '../../hooks';
import ModalChangePassword from './components/modal-change-password/modal-change-password';
import FormUser from './form-user/form-user';
import { Container, ButtonEdit, Title, TitleContent } from './user-styles';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserFormValidation } from './form-user/form-validation';
const resolver = zodResolver(UserFormValidation);

export const User = () => {
  const formatCep = useMaskFormatter(MaskOptionsEnum.CEP);
  const formatDocument = useMaskFormatter(MaskOptionsEnum.DOCUMENT);
  const formatPhoneNumber = useMaskFormatter(MaskOptionsEnum.PHONE_NUMBER);
  const { id } = useSelectors.User();
  const [isEditPassword, toggleIsEditPassword] = useToggle(false);
  const [loadUser, { data: user }] = useLazyGetUserProfileQuery();
  const [address] = user?.address ?? [];

  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserProfileMutation();
  const [loadAddress] = useLazyAddressInfoQuery();

  useToastAlert({
    isSuccess,
    successMessage: 'Perfil atualizado com sucesso',
    onSuccess: () => {
      if (isSuccess) loadUser({ id });
    }
  });
  useToastAlert({ isError, error: error?.code });

  useEffect(() => {
    if (id) loadUser({ id });
  }, [id]);

  const submitUser = (value) => {
    const userValue = {
      firstName: value?.firstName,
      lastName: value?.lastName,
      phoneNumber: value?.phoneNumber,
      address: {
        complement: value?.complement,
        district: value?.district,
        street: value?.street,
        zipCode: value?.zipCode,
        number: value?.number,
        cityId: value?.cityId,
        id: address?.id
      }
    };
    loadAddress({ zipCode: value?.zipCode })
      .unwrap()
      .then(() => {
        updateUser(userValue);
      });
  };

  const defaultValues = {
    ...user,
    phoneNumber:
      user?.phoneNumber && new formatPhoneNumber().format(user?.phoneNumber),
    document: user?.document && new formatDocument().format(user?.document),
    cityId: address?.cityId,
    complement: address?.complement,
    street: address?.street,
    number: address?.number,
    district: address?.district,
    zipCode: address?.zipCode && new formatCep().format(address?.zipCode)
  };
  const methods = useForm({ resolver, defaultValues, mode: 'onChange' });

  return (
    <>
      <Container>
        <ContainerGrid>
          <TitleContent>
            <Title variant='h1'>Perfil</Title>
            <ButtonEdit
              startIcon={<ChangePasswordIcon />}
              onClick={toggleIsEditPassword}
            >
              atualizar senha
            </ButtonEdit>
          </TitleContent>
          <FormProvider {...methods}>
            <FormUser onSubmit={submitUser} {...{ isLoading, defaultValues }} />
          </FormProvider>
        </ContainerGrid>
      </Container>

      <ModalChangePassword
        open={isEditPassword}
        onClose={() => toggleIsEditPassword()}
      />
    </>
  );
};

export default User;
