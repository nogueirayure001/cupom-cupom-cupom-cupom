import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StoreCardContainer = styled(Link)`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 250px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 0 0 black;
  transition: all 300ms ease;

  @media screen and (min-width: 768px) {
    max-width: none;
  }

  &:hover {
    top: -5px;
    left: -5px;
    box-shadow: 5px 5px 0 0 black;
  }
`;

export const StoreImage = styled.span`
  display: block;
  width: 100%;
  padding-top: 70%;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StoreName = styled.span`
  display: block;
  padding: 8px 6px;
  text-align: center;
  font-weight: 600;
`;
