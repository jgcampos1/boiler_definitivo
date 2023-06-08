import { useFormContext } from 'react-hook-form';

import { MaskOptionsEnum } from '~/app/presentation/common/enums/mask-enum';
import {
  ArrowPrev,
  IconButton,
  LogoSkyTech,
  TextButton
} from '~/app/presentation/components';
import { EyePasswordIcon } from '~/app/presentation/components/icons/eye-password-icon';
import TextInput from '~/app/presentation/components/text-input/text-input';
import { useToggle } from '~/app/presentation/hooks/use-toggle';

import {
  BoxLogo,
  Button,
  FormContainer,
  Link,
  TitleForm
} from './form-register-styles';

interface Props {
  onSubmit: (values) => void;
  isLoading: boolean;
}
const FormRegister = ({ onSubmit, isLoading }: Props) => {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const { handleSubmit } = useFormContext();

  const typePassword = showPassword ? 'text' : 'password';

  return (
    <FormContainer component='form' onSubmit={handleSubmit(onSubmit)}>
      <Link>
        <TextButton href='/' title='voltar' icon={<ArrowPrev />} />
      </Link>
      <BoxLogo>
        <LogoSkyTech />
      </BoxLogo>
      <TitleForm variant='h1'>Cadastre-se</TitleForm>
      <TextInput name='firstName' label='Nome' inputProps={{ maxLength: 50 }} />
      <TextInput
        name='lastName'
        label='Sobrenome'
        inputProps={{ maxLength: 50 }}
      />
      <TextInput name='email' label='Email' inputProps={{ maxLength: 256 }} />

      <TextInput
        type={typePassword}
        name='password'
        inputProps={{ maxLength: 50 }}
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
        label='CPF ou CNPJ'
        name='document'
        mask={{ type: MaskOptionsEnum.DOCUMENT, mode: 'onChange' }}
      />
      <TextInput
        label='Número de Telefone'
        name='phoneNumber'
        mask={{ type: MaskOptionsEnum.PHONE_NUMBER, mode: 'onChange' }}
      />
      <Button type='submit' {...{ isLoading }}>
        Cadastre-se
      </Button>
    </FormContainer>
  );
};

export default FormRegister;
