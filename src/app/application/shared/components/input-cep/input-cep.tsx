import { useEffect, useState } from 'react';

import { AddressModel } from '~/app/application/features/general/domain/address-model';
import { useLazyAddressInfoQuery } from '~/app/application/features/general/store/hooks';

import { MaskOptionsEnum } from '../../common/enums/mask-enum';
import { useDebounce } from '../../hooks/use-debounce';
import TextInput from '../text-input/text-input';
import { TextInputProps } from '../text-input/text-input';

type Props = TextInputProps & {
  onAddAddress?: (address: AddressModel) => void;
};

export const InputCep = ({ name, onAddAddress, ...props }: Props) => {
  const [loadAddress] = useLazyAddressInfoQuery();

  const [zipCode, setZipCode] = useState('');
  const debounceValue = useDebounce(zipCode, 500);

  const searchZipCode = async (value) => {
    if (value.length >= 9)
      loadAddress({ zipCode: value })
        .unwrap()
        .then((response) => {
          if (response) {
            if (onAddAddress) onAddAddress(response);
          }
        });
  };
  useEffect(() => {
    if (debounceValue) searchZipCode(debounceValue);
  }, [debounceValue]);
  const handleChange = (value: string) => {
    setZipCode(value);
  };

  return (
    <TextInput
      name={name}
      label='CEP'
      onChange={handleChange}
      mask={{ type: MaskOptionsEnum.CEP, mode: 'onChange' }}
      {...props}
    />
  );
};

export default InputCep;
