import { useFormContext } from 'react-hook-form';

import TextInput from '~/app/application/shared/components/text-input/text-input';

import { Button, FormContainer } from './form-recovery-password-styles';

interface Props {
  onSubmit: (values) => void;
  isLoading: boolean;
}
const FormLogin = ({ onSubmit, isLoading }: Props) => {
  const { handleSubmit } = useFormContext();

  return (
    <FormContainer component='form' onSubmit={handleSubmit(onSubmit)}>
      <TextInput name='email' label='Email' />
      <Button {...{ isLoading }} type='submit'>
        Enviar email de recuperação
      </Button>
    </FormContainer>
  );
};

export default FormLogin;
