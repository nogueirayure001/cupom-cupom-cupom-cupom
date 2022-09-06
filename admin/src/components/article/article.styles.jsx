import styled from 'styled-components';

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  font-family: ${({ theme }) => theme.secondaryFontFamily};

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
`;
