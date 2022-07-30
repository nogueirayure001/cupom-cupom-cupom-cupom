import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.neutral_II};
  background-color: #f6f4e8;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1024px) {
    padding: 48px 32px;
    gap: 48px;
  }
`;
