import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { useWidthObserver } from "../../hooks";
import { DEFAULT_CONFIGS, setScreenSize } from "./index";
import { StyledSwiper, StyledLink } from "./index";

import { DATA } from "../../assets/data";

function FeaturedStoresCarousel() {
  const width = useWidthObserver();
  const [configs, setConfigs] = useState(DEFAULT_CONFIGS);

  useEffect(() => setScreenSize(width, setConfigs), [width]);

  return (
    <StyledSwiper
      windowWidth={width}
      rows={configs.rows}
      slidesPerView={configs.slidesPerView}
      spaceBetween={15}
      pagination={{ clickable: true }}
      grid={{ rows: configs.rows }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      modules={[Pagination, Grid, Navigation, Autoplay]}
    >
      {DATA.map((store) => {
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
