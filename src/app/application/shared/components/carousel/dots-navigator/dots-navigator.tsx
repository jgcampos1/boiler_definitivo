import { useState } from 'react';

import Swiper from 'swiper';

import {
  ActiveCircleIn,
  ActiveCircleOut,
  DotsItem,
  DotsList,
  InactiveCircle
} from './dots-navigator-styles';

type Props = {
  className?: string;
  slidePerView: number;
  contentNumber: number;
  carouselController?: Swiper;
};

const DotsNavigator = ({
  className,
  slidePerView = 1,
  contentNumber,
  carouselController
}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (nextSlide: number) => () => {
    carouselController?.slideTo(nextSlide);

    setCurrentSlide(carouselController?.activeIndex ?? 0);
  };
  return (
    <DotsList className={className}>
      {Array(contentNumber / slidePerView)
        .fill({})
        .map((_, index) => (
          <DotsItem key={index}>
            {currentSlide === index * slidePerView ? (
              <ActiveCircleOut
                onClick={handleSlideChange(index * slidePerView)}
              >
                <ActiveCircleIn />
              </ActiveCircleOut>
            ) : (
              <InactiveCircle
                onClick={handleSlideChange(index * slidePerView)}
              />
            )}
          </DotsItem>
        ))}
    </DotsList>
  );
};

export default DotsNavigator;
