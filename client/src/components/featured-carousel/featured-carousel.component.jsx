import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { useWidthObserver } from '../../hooks';
import {
  selectAll,
  loadFeaturedStoresAsync
} from '../../store/featured-stores';
import { DEFAULT_CONFIGS, setScreenSize } from './index';
import {
  CarouselContainer,
  StyledSwiper,
  StyledLink,
  Placeholder,
  Loader
} from './index';
import { emptyArrayCreator } from '../../utils';
import useOffsetOberser from '../../hooks/useOffsetObserver';

function FeaturedStoresCarousel() {
  const [configs, setConfigs] = useState(DEFAULT_CONFIGS);
  const width = useWidthObserver();
  const { stores, isLoading } = useSelector(selectAll);
  const dispatch = useDispatch();
  const containerRef = useRef();
  const offset = useOffsetOberser(containerRef.current);

  useEffect(() => {
    setScreenSize(width, setConfigs);
  }, [width]);

  useEffect(() => {
    dispatch(loadFeaturedStoresAsync);
  }, []);

  const LoadedStoresContent = stores.map(({ name, image }) => {
    return (
      <SwiperSlide key={nanoid()}>
        <StyledLink to={`/stores/store/${name}`} image={image} />
      </SwiperSlide>
    );
  });

  const LoadingStoresContent = emptyArrayCreator(
    configs.rows * configs.slidesPerView
  ).map(() => (
    <SwiperSlide>
      <Placeholder>
        <Loader />
      </Placeholder>
    </SwiperSlide>
  ));

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
        {isLoading ? LoadingStoresContent : LoadedStoresContent}
      </StyledSwiper>
    </CarouselContainer>
  );
}

export default FeaturedStoresCarousel;
