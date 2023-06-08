import { useFormContext } from 'react-hook-form';

import {
  EyePasswordIcon,
  IconButton,
  TextInput
} from '~/app/presentation/components';
import { useToggle } from '~/app/presentation/hooks/use-toggle';

import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  FormContainer
} from './form-change-password-styles';

interface Props {
  onSubmit: (values) => void;
  isLoading: boolean;
  onClose: () => void;
}
const FormChangePassword = ({ onSubmit, isLoading, onClose }: Props) => {
  const { handleSubmit } = useFormContext();

  const [showPassword, toggleShowPassword] = useToggle(false);
  const [showNewPassword, toggleShowNewPassword] = useToggle(false);
  const typePassword = showPassword ? 'text' : 'password';
  const typeNewPassword = showNewPassword ? 'text' : 'password';

  return (
    <FormContainer component='form' onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type={typePassword}
        name='password'
        label='Senha'
        inputProps={{ maxLength: 50 }}
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
        type={typeNewPassword}
        name='newPassword'
        label='Nova senha'
        inputProps={{ maxLength: 50 }}
        InputProps={{
          endAdornment: (
            <IconButton
              type='button'
              onClick={toggleShowNewPassword}
              icon={<EyePasswordIcon visibility={showNewPassword} />}
            />
          )
        }}
      />
      <TextInput
        type={typeNewPassword}
        name='newPasswordConfirmation'
        label='Confirme a nova senha'
        inputProps={{ maxLength: 50 }}
        InputProps={{
          endAdornment: (
            <IconButton
              type='button'
              onClick={toggleShowNewPassword}
              icon={<EyePasswordIcon visibility={showNewPassword} />}
            />
          )
        }}
      />
      <ButtonContainer>
        <CancelButton type='button' onClick={onClose}>
          Cancelar
        </CancelButton>
        <ConfirmButton {...{ isLoading }} type='submit'>
          Alterar senha
        </ConfirmButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default FormChangePassword;
