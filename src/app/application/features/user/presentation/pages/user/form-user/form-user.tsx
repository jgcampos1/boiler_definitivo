import { useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { AddressModel } from '~/app/application/features/general/domain/address-model';
import { UserModel } from '~/app/application/features/user/domain/model/user-model';
import { STATE_JSON } from '~/app/application/shared/common/constants/general/states';
import { MaskOptionsEnum } from '~/app/application/shared/common/enums/mask-enum';
import { filterCitiesById } from '~/app/application/shared/common/helpers/cities/filter-cities-by-id';
import { filterCitiesByState } from '~/app/application/shared/common/helpers/cities/filter-cities-by-state';
import { getOptions } from '~/app/application/shared/common/helpers/get-options-select';
import {
  InputCep,
  SelectInput,
  TextInput
} from '~/app/application/shared/components';

import {
  Button,
  FieldInput,
  FormContainer,
  InputContent,
  TitleForm
} from './form-user-styles';

interface Props {
  onSubmit: (values) => void;
  isLoading: boolean;
  defaultValues: UserModel;
}
const FormUser = ({ onSubmit, isLoading, defaultValues }: Props) => {
  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting }
  } = useFormContext();

  const [stateId, cityId] = useWatch({
    name: ['stateId', 'cityId']
  }) as [string, string];

  const setAddressValues = (value: AddressModel) => {
    Object.keys(value).forEach(function (item) {
      setValue(item, value[item]);
    });
  };

  useEffect(() => {
    Object.keys(defaultValues).forEach(function (item) {
      setValue(item, defaultValues[item]);
    });
  }, [defaultValues]);

  const disabledInputSelect = !stateId;

  const filterCityForStateId = () => {
    const stateId = filterCitiesById(cityId)?.state_id;
    setValue('stateId', stateId);
  };

  const citiesOptions = useMemo(() => {
    if (!stateId && cityId) filterCityForStateId();

    const cities = filterCitiesByState(stateId);
    return getOptions(cities);
  }, [stateId, cityId]);

  const stateOptions = getOptions(STATE_JSON);

  const loadingButton = isLoading || isSubmitting;
  return (
    <FormContainer component='form' onSubmit={handleSubmit(onSubmit)}>
      <TitleForm variant='h2'>Informações pessoais</TitleForm>
      <InputContent>
        <FieldInput>
          <TextInput
            name='firstName'
            label='Nome'
            inputProps={{ maxLength: 50 }}
          />
          <TextInput
            name='lastName'
            label='Sobrenome'
            inputProps={{ maxLength: 50 }}
          />
        </FieldInput>
        <TextInput name='email' label='Email' disabled={true} />
        <FieldInput>
          <TextInput
            label='CPF ou CNPJ'
            name='document'
            disabled={true}
            mask={{ type: MaskOptionsEnum.DOCUMENT, mode: 'onChange' }}
          />
          <TextInput
            label='Número de Telefone'
            name='phoneNumber'
            mask={{ type: MaskOptionsEnum.PHONE_NUMBER, mode: 'onChange' }}
          />
        </FieldInput>
      </InputContent>

      <TitleForm variant='h2'>Informações de endereço</TitleForm>
      <InputContent>
        <FieldInput>
          <InputCep
            name='zipCode'
            label='CEP'
            onAddAddress={setAddressValues}
          />
          <TextInput name='number' type='number' label='Número' />
        </FieldInput>
        <FieldInput>
          <SelectInput label='Estado' name='stateId' options={stateOptions} />
          <SelectInput
            name='cityId'
            label='Cidade'
            disabled={disabledInputSelect}
            options={citiesOptions}
          />
        </FieldInput>
        <FieldInput>
          <TextInput
            label='Logradouro'
            name='street'
            inputProps={{ maxLength: 100 }}
          />
          <TextInput
            label='Bairro'
            name='district'
            inputProps={{ maxLength: 100 }}
          />

          <TextInput
            label='Complemento'
            name='complement'
            inputProps={{ maxLength: 200 }}
          />
        </FieldInput>
      </InputContent>

      <Button type='submit' isLoading={loadingButton}>
        Salvar
      </Button>
    </FormContainer>
  );
};

export default FormUser;
