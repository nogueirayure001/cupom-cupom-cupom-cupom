import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper } from 'swiper/react';

export const CarouselContainer = styled.div`
  position: relative;
  left: ${({ offset }) => `-${offset}px`};
  width: ${({ offset }) => `calc(100% + 2 * ${offset}px)`};
  padding: 24px 16px 16px;
  background-color: ${({ theme }) => theme.detail_II};

  @media screen and (min-width: 768px) {
    padding: 32px 24px 16px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  height: ${({ windowWidth, rows, slidesPerView }) => {
    return `calc(${(0.7 * windowWidth * rows) / slidesPerView}px + 20px)`;
  }};
  padding: 5px 0 15px;

  .swiper-pagination {
    bottom: 0;

    & .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.secondary_II};
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondary_II};
    opacity: 0.5;
    transition: opacity 300ms ease;

    @media screen and (min-width: 768px) {
      width: 50px;
      height: 50px;
    }

    &:hover {
      opacity: 0.8;
    }

    &::after {
      position: relative;
      font-size: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.neutral_II};

      @media screen and (min-width: 768px) {
        font-size: 1.6rem;
      }
    }

    color: ${({ theme }) => theme.secondary_II};
  }

  .swiper-button-next {
    &::after {
      left: 1.5px;

      @media screen and (min-width: 768px) {
        left: 3px;
      }
    }
  }
  .swiper-button-prev {
    &::after {
      right: 1.5px;

      @media screen and (min-width: 768px) {
        right: 3px;
      }
    }
  }

  .swiper-slide {
    height: ${({ rows }) => `
      calc((100% + 15px -  ${(rows - 1) * 30}px) / ${rows});
    `};
    padding: 5px;
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  right: 0;
  bottom: 0;
  display: block;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.detail_I};
  background-image: ${({ image }) => `url(${image})`};
  transition: all 300ms ease;

  &:hover {
    right: 5px;
    bottom: 5px;
    box-shadow: 5px 5px 0 0 ${({ theme }) => theme.secondary_II};
  }
`;

export const Placeholder = styled.div`
  position: relative;
  right: 0;
  bottom: 0;
  display: block;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.detail_I};
  overflow: hidden;
`;

export const Loader = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    transform: rotate(30deg) scaleY(2);
    width: 5px;
    height: 100%;
    background-color: ${({ theme }) => theme.detail_II};
    box-shadow: 0 0 15px 20px ${({ theme }) => theme.detail_II};
    opacity: 0.3;
    animation-name: slide;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;

    @keyframes slide {
      from {
        left: -100%;
        right: none;
      }
      to {
        left: 200%;
      }
    }
  }
`;
