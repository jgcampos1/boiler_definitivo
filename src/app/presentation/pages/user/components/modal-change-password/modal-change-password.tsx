import { useUpdatePasswordUserMutation } from '~/app/application/user/store';
import { Modal } from '~/app/presentation/components';
import { useToastAlert } from '~/app/presentation/hooks';

import FormChangePassword from './components/form-change-password/form-change-password';
import { ChangePasswordFormValidation } from './components/form-change-password/form-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

const resolver = zodResolver(ChangePasswordFormValidation);

interface Props {
  open: boolean;
  onClose: () => void;
}

const ModalChangePassword = ({ open, onClose }: Props) => {
  const methods = useForm({ resolver, mode: 'onSubmit' });
  const [updatePassword, { isError, isLoading, isSuccess, error }] =
    useUpdatePasswordUserMutation();
  const submit = (values) => {
    updatePassword({
      password: values?.password,
      newPassword: values?.newPassword
    });
  };

  useToastAlert({
    isSuccess,
    successMessage: 'Senha atualizada com Sucesso',
    onSuccess: () => {
      onClose();
    }
  });

  useToastAlert({
    isError,
    error: error?.code
  });
  return (
    <Modal
      {...{ open, onClose }}
      title='Atualizar senha'
      hiddenActions
      maxWidth='xl'
    >
      <FormProvider {...methods}>
        <FormChangePassword onSubmit={submit} {...{ isLoading, onClose }} />
      </FormProvider>
    </Modal>
  );
};

export default ModalChangePassword;
