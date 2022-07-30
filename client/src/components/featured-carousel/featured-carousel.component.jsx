import { useState, useContext, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { useWidthObserver } from '../../hooks';
import { FeaturedStoresContext } from '../../contexts';
import { DEFAULT_CONFIGS, setScreenSize } from './index';
import { CarouselContainer, StyledSwiper, StyledLink } from './index';
import useOffsetOberser from '../../hooks/useOffsetObserver';

function FeaturedStoresCarousel() {
  const [configs, setConfigs] = useState(DEFAULT_CONFIGS);
  const width = useWidthObserver();
  const stores = useContext(FeaturedStoresContext);
  const containerRef = useRef();
  const offset = useOffsetOberser(containerRef.current);

  useEffect(() => {
    setScreenSize(width, setConfigs);
  }, [width]);

  return (
    <CarouselContainer offset={offset} ref={containerRef}>
      <StyledSwiper
        windowWidth={width}
        rows={configs.rows}
        slidesPerView={configs.slidesPerView}
        spaceBetween={5}
        pagination={{ clickable: true }}
        grid={{ rows: configs.rows }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        navigation
        modules={[Pagination, Grid, Navigation, Autoplay]}
      >
        {stores.map(({ name, image }) => {
          return (
            <SwiperSlide key={nanoid()}>
              <StyledLink to={`/stores/store/${name}`} image={image} />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </CarouselContainer>
  );
}

export default FeaturedStoresCarousel;
