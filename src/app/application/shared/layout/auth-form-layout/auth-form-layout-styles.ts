import { Box, Typography, styled } from '@mui/material';

export const Container = styled(Box)(() => ({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4)
}));

export const Content = styled(Box)(() => ({
  flex: '1',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}));

export const ContainerForm = styled(Box)(() => ({
  flex: '1',
  height: '100%',
  width: '100%'
}));

export const BackgroundImage = styled(Box)(() => ({
  width: '60%',
  height: '100%',
  backgroundImage: "url('./assets/images/login/background.png')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative'
}));

export const BoxTextBackground = styled(Typography)(() => ({
  position: 'absolute',
  top: '60%',
  left: '128px'
}));

export const TitleBackground = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  lineHeight: '60px',
  fontSize: '3.5625rem',
  fontWeight: '400',
  color: '#fff'
}));

export const DescriptionBackground = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  lineHeight: '24px',
  fontWeight: '300',
  letterSpacing: '1px',
  color: '#BDBDBD',
  width: '620px',
  textAlign: 'justify'
}));
