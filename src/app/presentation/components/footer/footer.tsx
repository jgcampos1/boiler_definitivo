import { useMemo } from 'react';

import { APP_ENV } from '~/env';

import { IconButton, TextButton } from '../buttons';
import {
  WhatsappIcon,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
  InstagramIcon
} from '../icons';
import {
  CnpjContainer,
  CnpjText,
  Container,
  Icons,
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
        <UlContainer>
          <li>
            <TextButton
              title='contato@picenvios.com.br'
              removeLine
              href='https://api.whatsapp.com/send?phone=5511911246997&text=Ol%C3%A1%20Pic%20Envios!'
              buttonColor='white'
              icon={<EmailIcon />}
            />
          </li>
          <li>
            <TextButton
              title='(11) 91124-6997'
              removeLine
              href='https://api.whatsapp.com/send?phone=5511911246997&text=Ol%C3%A1%20Pic%20Envios!'
              buttonColor='white'
              icon={<WhatsappIcon />}
            />
          </li>
          <Icons>
            <IconButton
              icon={<FacebookIcon />}
              target='_blank'
              iconColor='white'
              href='https://www.facebook.com/people/Pic-Envios/pfbid035JsWUmuXTQxPUrTfHpqLcEt6xJqTwzWcGh2Bmq6fGenBbUjEdx2GaLaFSzBxaCwwl/'
            />
            <IconButton
              icon={<TwitterIcon />}
              target='_blank'
              iconColor='white'
              href='https://www.instagram.com/pic_envios/'
            />
            <IconButton
              icon={<InstagramIcon />}
              target='_blank'
              iconColor='white'
              href='https://twitter.com/pic_envios'
            />
          </Icons>
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
