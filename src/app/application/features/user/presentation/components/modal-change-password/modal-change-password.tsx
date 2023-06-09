import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useUpdatePasswordUserMutation } from '~/app/application/features/user/store/hooks';
import { Modal } from '~/app/application/shared/components';
import { useToastAlert } from '~/app/application/shared/hooks/use-toast-alert';

import FormChangePassword from './components/form-change-password/form-change-password';
import { ChangePasswordFormValidation } from './components/form-change-password/form-validation/form-validation';

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
