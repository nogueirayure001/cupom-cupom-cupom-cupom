import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
`;

export const Title = styled.h2`
  position: relative;
  width: auto;
  padding-bottom: 12px;
  margin-bottom: 24px;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #344648;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 1.75rem;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    content: " ";
    width: 80px;
    transform: translateX(-50%);
    border-bottom: 6px solid #007aff;
  }
`;
