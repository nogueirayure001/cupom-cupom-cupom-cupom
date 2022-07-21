import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  height: ${({ windowWidth, rows, slidesPerView }) => {
    return `calc(${(0.65 * windowWidth * rows) / slidesPerView}px + 30px)`;
  }};
  padding: 5px 0 25px;

  .swiper-pagination {
    bottom: 0;

    & .swiper-pagination-bullet {
      background-color: black;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: black;
  }

  .swiper-slide {
    height: ${({ rows }) => `
      calc((100% + 15px -  ${(rows - 1) * 30}px) / ${rows});
    `};
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  right: 0;
  bottom: 0;
  display: block;
  height: 100%;
  border: 3px solid black;
  border-radius: 6px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  background-image: ${({ image }) => `url(${image})`};
  transition: all 300ms ease;

  &:hover {
    right: 5px;
    bottom: 5px;
    box-shadow: 5px 5px 0 0 black;
  }
`;
