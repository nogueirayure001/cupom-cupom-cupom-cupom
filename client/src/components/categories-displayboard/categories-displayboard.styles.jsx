import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoriesDisplayboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  position: relative;
  top: 0;
  left: 0;
  padding: 12px 16px;
  border: 2px solid black;
  border-radius: 6px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.neutral_II};
  background-color: ${({ theme }) => theme.primary_II};
  transition: all 300ms ease;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  &:hover {
    top: -3px;
    left: -3px;
    box-shadow: 3px 3px 0 0 ${({ theme }) => theme.secondary_II};
  }
`;
