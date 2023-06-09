import { Children, cloneElement, ReactElement } from 'react';

import type SwiperClass from 'swiper';
import { Controller, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper } from './carousel-styles';

type Props = {
  gap?: number;
  slidesPerView?: number | 'auto';
  freeMode?: boolean;
  children: ReactElement[];
  className?: string;
  handleController?: (swiper: SwiperClass) => void;
};

const SWIPER_MODULES = [Pagination, Controller];

const PAGINATION_CONFIG: PaginationOptions = {
  clickable: true
};

const Carousel = ({
  gap,
  freeMode,
  children,
  className,
  handleController,
  slidesPerView = 'auto'
}: Props) => {
  return (
    <Swiper
      className={className}
      slidesPerView={slidesPerView}
      freeMode={freeMode}
      spaceBetween={gap}
      pagination={PAGINATION_CONFIG}
      modules={SWIPER_MODULES}
      onSwiper={handleController}
      scrollbar={{ draggable: true }}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{cloneElement(child)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
