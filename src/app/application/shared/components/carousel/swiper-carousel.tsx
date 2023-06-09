import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import { Children, memo, useMemo } from 'react';

import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Controller, Navigation, Pagination, Autoplay } from 'swiper';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import type { PaginationOptions, SwiperModule } from 'swiper/types';

import { useSwiperRef } from './hooks';
import {
  ArrowNavigationButtons,
  StyledSwiper,
  Wrapper
} from './swiper-carousel-styles';

type Props = SwiperProps & {
  swiperModules?: SwiperModule[];
  paginationConfig?: PaginationOptions;
  arrowNavigation?: boolean;
  arrowNavigationPosition?: 'center' | 'leftBottom' | 'rightBottom';
  buttonsColor?: 'primary' | 'white';
  bulletBottomPosition?: string;
};

export const SwiperCarousel = memo(
  ({
    children,
    arrowNavigationPosition = 'center',
    buttonsColor = 'primary',
    className,
    slidesPerView = 'auto',
    swiperModules = [],
    paginationConfig,
    arrowNavigation = false,
    bulletBottomPosition,
    ...rest
  }: Props) => {
    const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
    const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

    const SWIPER_MODULES = useMemo(
      () => [Pagination, Controller, Navigation, Autoplay, ...swiperModules],
      [Pagination, Controller, ...swiperModules]
    );

    const PAGINATION_CONFIG: PaginationOptions = useMemo(
      () => ({
        clickable: true,
        type: arrowNavigation ? 'custom' : 'bullets',
        // bulletClass
        ...paginationConfig
      }),
      []
    );

    const NAVIGATION_CONFIG = arrowNavigation
      ? {
          prevEl,
          nextEl
        }
      : {};

    return (
      <Wrapper className={className} disablePaddingBottom={arrowNavigation}>
        {arrowNavigation && (
          <ArrowNavigationButtons
            buttonsColor={buttonsColor}
            position={arrowNavigationPosition}
          >
            <button ref={prevElRef}>
              <ArrowBack />
            </button>
            <button ref={nextElRef}>
              <ArrowForward />
            </button>
          </ArrowNavigationButtons>
        )}
        <StyledSwiper
          navigation={NAVIGATION_CONFIG}
          modules={SWIPER_MODULES}
          pagination={PAGINATION_CONFIG}
          slidesPerView={slidesPerView}
          bulletBottomPosition={bulletBottomPosition}
          spaceBetween={rest.spaceBetween ?? 30}
          {...rest}
        >
          {Children.map(children, (child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </StyledSwiper>
      </Wrapper>
    );
  }
);

SwiperCarousel.displayName = 'SwiperCarousel';

export default SwiperCarousel;
