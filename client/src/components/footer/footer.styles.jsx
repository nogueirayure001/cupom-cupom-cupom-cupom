import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 32px 20px;
  background-color: #191718;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
    gap: 80px;
  }
`;

export const Subdivision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
`;
