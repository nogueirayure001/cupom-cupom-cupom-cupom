import styled from 'styled-components';

import { Article } from '../article';
import { Button } from '../button';

export const StyledArticle = styled(Article)`
  width: 100%;
  padding: 20px 16px;
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(10, 98, 208, 1) 75%
  );

  @media screen and (min-width: 425px) {
    background: url(${'../../assets/images/discount.svg'}),
      linear-gradient(45deg, rgba(2, 0, 36, 1) 0%, rgba(10, 98, 208, 1) 75%);
    background-repeat: no-repeat;
    background-position: 12px 95%, 0 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 80%;
  }

  & > *:first-child {
    color: white;
    font-size: 1.2rem;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const Placeholder = styled(Article)`
  width: 100%;
  height: 430px;
  padding: 20px 16px;
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.detail_I};
  overflow: hidden;

  @media screen and (min-width: 375px) {
    height: 410px;
  }

  @media screen and (min-width: 768px) {
    max-width: 80%;
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    height: 270px;
  }
`;

export const Loader = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    left: 00%;
    transform: rotate(30deg) scaleY(2);
    width: 5px;
    height: 100%;
    background-color: ${({ theme }) => theme.detail_II};
    box-shadow: 0 0 15px 20px ${({ theme }) => theme.detail_II};
    opacity: 0.3;
    animation-name: slide;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes slide {
      from {
        left: -100%;
        right: none;
      }
      to {
        left: 300%;
      }
    }

    @media screen and (min-width: 375px) {
      @keyframes slide {
        from {
          left: -100%;
          right: none;
        }
        to {
          left: 250%;
        }
      }
    }

    @media screen and (min-width: 768px) {
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

    @media screen and (min-width: 1024px) {
      @keyframes slide {
        from {
          left: -100%;
          right: none;
        }
        to {
          left: 120%;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  font-family: ${({ theme }) => theme.secondaryFontFamily};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 24px 0;
  }
`;

export const StoreImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.detail_I};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CouponCodeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CouponCode = styled(Button)`
  margin-top: 16px;
  min-width: 200px;

  @media screen and (min-width: 768px) {
    min-width: none;
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    min-width: 200px;
  }
`;

export const CouponCodeLabel = styled.label`
  margin-top: 6px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondary_II};
`;

export const CopySuccessSign = styled.span`
  position: absolute;
  top: -30px;
  left: 50%;
  padding: 8px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.alert_I};

  &::after {
    position: absolute;
    top: 100%;
    left: 50%;
    content: '';
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 16px solid ${({ theme }) => theme.alert_I};
  }
`;

export const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const StoreLink = styled.a`
  padding: 8px 16px;
  color: ${({ theme }) => theme.neutral_II};
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  border-radius: 999px;
  background-color: black;
  transition: all 300ms ease;

  &:hover {
    color: ${({ theme }) => theme.primary_II};
    background-color: ${({ theme }) => theme.secondary_I};
  }
`;

export const Category = styled.p`
  color: ${({ theme }) => theme.neutral_II};
  font-size: 0.95rem;
  font-weight: 400;
`;
