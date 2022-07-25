import { useState, useContext, useEffect } from 'react';
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
import { StyledSwiper, StyledLink } from './index';

function FeaturedStoresCarousel() {
  const [configs, setConfigs] = useState(DEFAULT_CONFIGS);
  const width = useWidthObserver();
  useEffect(() => setScreenSize(width, setConfigs), [width]);

  const stores = useContext(FeaturedStoresContext);

  return (
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
      {stores.map((store) => {
        return (
          <SwiperSlide key={store.name}>
            <StyledLink to='/' image={store.image} />
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
}

export default FeaturedStoresCarousel;
