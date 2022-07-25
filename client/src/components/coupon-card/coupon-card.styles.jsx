import styled from 'styled-components';

import { Article } from '../article';

export const StyledArticle = styled(Article)`
  width: 100%;
  padding: 20px 16px;
  border: 3px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.primary_I};
  background-image: url(${'../../assets/images/discount.svg'});
  background-repeat: no-repeat;
  background-position: 12px 95%;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
  background-color: ${({ theme }) => theme.detail};
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

export const CouponCode = styled.input.attrs({ type: 'button' })`
  position: relative;
  top: 0;
  left: 0;
  padding: 12px 16px;
  margin-top: 16px;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.secondary_II};
  border: 3px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.primary_II};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.secondary_II};
  cursor: pointer;
  transition: all 300ms ease;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  &:hover {
    top: -3px;
    left: -3px;
    box-shadow: 3px 3px 0 0 ${({ theme }) => theme.secondary_II};
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
