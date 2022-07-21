import styled from "styled-components";

import { Article } from "../article";

export const StyledArticle = styled(Article)`
  width: 100%;
  padding: 20px 16px;
  border: 3px solid black;
  border-radius: 6px;
  background-color: #c3cbd6;
  background-color: #0a62d0;
  background-image: url(${"../../assets/images/discount.svg"});
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
  background-color: white;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CouponCode = styled.input.attrs({ type: "button" })`
  position: relative;
  top: 0;
  left: 0;
  padding: 12px 16px;
  margin-top: 16px;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: black;
  border: 3px solid black;
  border-radius: 6px;
  background-color: #c3cbd6;
  box-shadow: 0 0 0 0 black;
  cursor: pointer;
  transition: all 300ms ease;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  &:hover {
    top: -3px;
    left: -3px;
    box-shadow: 3px 3px 0 0 black;
  }
`;

export const CouponCodeLabel = styled.label`
  margin-top: 6px;
  font-size: 0.8rem;
  color: black;
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
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 999px;
  background-color: black;
  transition: all 300ms ease;

  &:hover {
    color: #c3cbd6;
    background-color: #191718;
  }
`;

export const Category = styled.p`
  color: white;
  font-size: 0.95rem;
  font-weight: 400;
`;
