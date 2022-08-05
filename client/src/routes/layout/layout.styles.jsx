import styled from 'styled-components';

import { Button } from '../../components/button';

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

export const BackToTopButton = styled(Button)`
  position: fixed;
  top: auto;
  left: auto;
  right: 30px;
  bottom: 20px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 3px 1px;
  color: ${({ theme }) => theme.primary_I};
  animation: pulse 2s infinite;
  z-index: 9999;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 3px 1px;
    }

    70% {
      box-shadow: 0 0 10px 5px;
    }

    100% {
      box-shadow: 0 0 3px 1px;
    }
  }

  @media screen and (min-width: 768px) {
    right: 80px;
    bottom: 40px;
    width: 50px;
    height: 50px;
  }

  &:hover {
    top: auto;
    left: auto;
    box-shadow: 0 0 5px 2px;
    transform: scale(1.1);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    display: block;
    border: 8px solid transparent;
    border-bottom-color: ${({ theme }) => theme.neutral_II};

    @media screen and (min-width: 768px) {
      border-width: 10px;
    }
  }

  &::after {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    display: block;
    width: 6px;
    height: 16px;
    background-color: ${({ theme }) => theme.neutral_II};

    @media screen and (min-width: 768px) {
      bottom: 10px;
      height: 20px;
    }
  }
`;
