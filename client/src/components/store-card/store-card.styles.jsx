import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StoreCardContainer = styled(Link)`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 250px;
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.detail_I};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.secondary_II};
  transition: all 300ms ease;

  @media screen and (min-width: 768px) {
    max-width: none;
  }

  &:hover {
    top: -5px;
    left: -5px;
    box-shadow: 5px 5px 0 0 ${({ theme }) => theme.secondary_II};
  }
`;

export const StoreCardContainerPlaceholder = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 250px;
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.detail_I};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(30deg) scaleY(2);
    width: 5px;
    height: 100%;
    background-color: ${({ theme }) => theme.detail_II};
    box-shadow: 0 0 15px 20px ${({ theme }) => theme.detail_II};
    opacity: 0.3;
    animation-name: slide;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;

    @keyframes slide {
      from {
        left: -100%;
        right: none;
      }
      to {
        left: 200%;
      }
    }
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

export const StoreImagePlaceholder = styled.span`
  display: block;
  width: 100%;
  padding-top: 70%;
`;

export const StoreName = styled.span`
  display: block;
  padding: 8px 6px;
  text-align: center;
  font-weight: 600;
`;

export const StoreNamePlaceholder = styled.span`
  display: block;
  padding: 8px 6px;
  color: transparent;
`;
