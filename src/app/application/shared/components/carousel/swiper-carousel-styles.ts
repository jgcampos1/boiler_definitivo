import { styled } from '@mui/material';
import { Swiper } from 'swiper/react';
import { includesForwardProps } from '~/app/application/shared/common/helpers/includes-forward-props';
import { theme } from '~/app/application/shared/styles/theme';

type WrapperProps = {
  disablePaddingBottom?: boolean;
};
const WrapperConst = ['disablePaddingBottom'];
export const Wrapper = styled('div', {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, WrapperConst)
})<WrapperProps>(({ theme, disablePaddingBottom }) => ({
  position: 'relative',
  paddingBottom: disablePaddingBottom ? 0 : '2.6rem',

  [theme.breakpoints.up('lg')]: {
    padding: 0
  }
}));

type SwiperProps = {
  slideFitContent?: boolean;
  bulletBottomPosition?: string;
};

const StyledSwiperProps = ['slideFitContent', 'bulletBottomPosition'];

export const StyledSwiper = styled(Swiper, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, StyledSwiperProps)
})<SwiperProps>(({ theme, slideFitContent }) => ({
  '&.swiper': {
    position: 'relative',
    overflowX: 'clip',
    overflowY: 'initial',
    height: '100%',
    '& > .swiper-button-prev, & > .swiper-button-next': {
      display: 'none'
    }
  },

  '.swiper-wrapper': {
    position: 'initial'
  },

  '.swiper-slide': {
    width: slideFitContent ? 'fit-content' : '100%'
  },

  '.swiper-pagination-horizontal.swiper-pagination-bullets': {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    height: 'fit-content',
    transform: 'translateX(-50%)',
    bottom: '5px',
    left: '50%',

    [theme.breakpoints.down('lg')]: {
      bottom: '5px'
    },

    '.swiper-pagination-bullet': {
      height: '10px',
      width: '10px',
      marginRight: '1rem'
    },

    '.swiper-pagination-bullet-active': {
      position: 'relative',
      background: theme.palette.primary.main,
      height: '5px',
      width: '5px',

      '&::before': {
        content: "''",
        position: 'absolute',
        outline: `1px solid ${theme.palette.primary.main}`,
        width: '15px',
        height: '15px',
        borderRadius: '100%',
        left: '-5px',
        top: '-5px'
      }
    }
  }
}));

const handlePosition = (position: 'center' | 'leftBottom' | 'rightBottom') => {
  const positionMapper = {
    center: {
      top: '50%',
      transform: 'translateY(-50%)',
      padding: theme.spacing(0, 7.75)
    },
    leftBottom: {
      height: 40,
      transform: 'translateY(50%)',
      bottom: '0%',
      justifyContent: 'flex-start',
      top: 'unset'
    },
    rightBottom: {
      transform: 'translateY(50%)',
      bottom: '0%',
      justifyContent: 'flex-end',
      top: 'unset'
    }
  };

  return positionMapper[position];
};

type ArrowNavigationProps = {
  position?: 'center' | 'leftBottom' | 'rightBottom';
  buttonsColor?: 'primary' | 'white';
};

const ArrowNavigationButtonsProps = ['position', 'buttonsColor'];

export const ArrowNavigationButtons = styled('div', {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, ArrowNavigationButtonsProps)
})<ArrowNavigationProps>(({ theme, buttonsColor, position = 'center' }) => ({
  position: 'absolute',
  zIndex: 99,
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: 0,
  ...handlePosition(position),
  '& button': {
    all: 'unset',
    cursor: 'pointer',
    background:
      buttonsColor === 'primary'
        ? theme.palette.primary.main
        : theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    width: '40px',
    '& svg': {
      color:
        buttonsColor === 'primary'
          ? theme.palette.common.white
          : theme.palette.common.black
    },
    '&:disabled': {
      opacity: 0.3
    },
    [theme.breakpoints.down('md')]: {
      '&:disabled': {
        background: theme.palette.grey[100],
        cursor: 'not-allowed'
      }
    }
  }
}));
