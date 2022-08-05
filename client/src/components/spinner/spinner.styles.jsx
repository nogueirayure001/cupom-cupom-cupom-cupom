import styled, { css } from 'styled-components';

const fullPageSpinner = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 9999;
`;

export const SpinnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  background-color: ${({ theme }) => theme.neutral_II};
  overflow: hidden;

  ${({ fullpage }) => fullpage && fullPageSpinner}
`;

export const SpinnerCircle = styled.p`
  width: 40px;
  height: 40px;
  text-indent: -9999px;
  border: 10px solid ${({ theme }) => theme.primary_I};
  border-left: 10px solid transparent;
  border-radius: 50%;
  animation-name: spin;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
      border-color: ${({ theme }) => theme.primary_I};
      border-left: 10px solid transparent;
    }

    50% {
      border-color: ${({ theme }) => theme.primary_II};
      border-left: 10px solid transparent;
    }

    to {
      transform: rotate(360deg);
      border-color: ${({ theme }) => theme.primary_I};
      border-left: 10px solid transparent;
    }
  }
`;
