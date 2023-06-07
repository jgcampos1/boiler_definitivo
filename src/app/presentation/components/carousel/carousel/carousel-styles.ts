import { styled } from '@mui/material';
import { Swiper as ReactSwiper } from 'swiper/react';

export const Swiper = styled(ReactSwiper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  '& .swiper-wrapper > :first-of-type': {
    boxSizing: 'border-box',
    paddingLeft: theme.spacing(2.6)
  },
  '& .swiper-pagination': {
    position: 'initial',
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '& .swiper-pagination-bullet': {
    backgroundColor: theme.palette.grey[300],
    width: 10,
    height: 10,
    borderRadius: '50%'
  },
  '& .swiper-pagination-bullet-active': {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.dark}`,
    width: 15,
    height: 15,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:after': {
      content: '""',
      backgroundColor: theme.palette.primary.dark,
      width: 5,
      height: 5,
      borderRadius: '50%'
    }
  }
}));
