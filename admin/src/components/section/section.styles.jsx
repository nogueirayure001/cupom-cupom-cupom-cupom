import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
`;

export const Title = styled.h2`
  position: relative;
  width: auto;
  padding-bottom: 12px;
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  font-weight: 700;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.neutral_I};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 1.75rem;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    content: ' ';
    width: 80px;
    transform: translateX(-50%);
    border-bottom: 6px solid ${({ theme }) => theme.primary_I};
  }
`;
