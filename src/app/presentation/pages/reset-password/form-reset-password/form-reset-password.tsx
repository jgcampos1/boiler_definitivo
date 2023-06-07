import { useFormContext } from 'react-hook-form';

import { IconButton } from '~/app/presentation/components';
import { EyePasswordIcon } from '~/app/presentation/components/icons/eye-password-icon';
import TextInput from '~/app/presentation/components/text-input/text-input';
import { useToggle } from '~/app/presentation/hooks';

import { Button, FormContainer } from './form-reset-password-styles';

interface Props {
  onSubmit: (values) => void;
  isLoading: boolean;
}
const FormPasswordLogin = ({ onSubmit, isLoading }: Props) => {
  const { handleSubmit } = useFormContext();
  const [showPassword, toggleShowPassword] = useToggle(false);

  const typePassword = showPassword ? 'text' : 'password';
  return (
    <FormContainer component='form' onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type={typePassword}
        name='password'
        label='Senha'
        InputProps={{
          endAdornment: (
            <IconButton
              type='button'
              onClick={toggleShowPassword}
              icon={<EyePasswordIcon visibility={showPassword} />}
            />
          )
        }}
      />
      <TextInput
        type={typePassword}
        name='passwordConfirmation'
        label='Confirme a Senha'
        InputProps={{
          endAdornment: (
            <IconButton
              type='button'
              onClick={toggleShowPassword}
              icon={<EyePasswordIcon visibility={showPassword} />}
            />
          )
        }}
      />
      <Button {...{ isLoading }} type='submit'>
        Atualizar senha
      </Button>
    </FormContainer>
  );
};

export default FormPasswordLogin;
