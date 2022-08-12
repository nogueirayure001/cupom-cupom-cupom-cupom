import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ActionCardContainer = styled(Link)`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 150px;
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.detail_I};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.secondary_II};
  transition: all 300ms ease;

  &:hover {
    top: -5px;
    left: -5px;
    box-shadow: 5px 5px 0 0 ${({ theme }) => theme.secondary_II};
  }
`;

export const ActionImage = styled.span`
  display: block;
  width: 100%;
  padding-top: 70%;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ActionName = styled.span`
  display: block;
  padding: 8px 6px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
`;
