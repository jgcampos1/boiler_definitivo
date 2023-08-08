import { useMemo } from 'react';

import { APP_ENV } from '~/env';

import { TextButton } from '../buttons';
import {
  CnpjContainer,
  CnpjText,
  Container,
  UlContainer
} from './footer-styles';

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear().toString(), []);
  return (
    <>
      <Container>
        <UlContainer>
          <li>
            <TextButton
              title='Pagina Inicial'
              removeLine
              buttonColor='white'
              href={APP_ENV.APP_URL}
            />
          </li>
          <li>
            <TextButton
              title='Suporte'
              href={APP_ENV?.APP_URL}
              removeLine
              buttonColor='white'
            />
          </li>
          <li>
            <TextButton
              title='Trabalhe conosco'
              removeLine
              href={APP_ENV?.APP_URL}
              customTextColor='white'
            />
          </li>
        </UlContainer>
      </Container>
      <CnpjContainer>
        <CnpjText>
          <strong>Pic envios - {year}</strong> CNPJ: 32.618.607/0001-26
        </CnpjText>
      </CnpjContainer>
    </>
  );
};

export default Footer;
