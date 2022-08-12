import styled, { css } from 'styled-components';

const fullPageSpinner = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 9999;
`;

const miniSpinnerContainer = css`
  height: 100%;
`;

const miniSpinner = css`
  width: 25px;
  height: 25px;
  border-width: 6px;
  border-left-width: 6px;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
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
  ${({ mini }) => mini && miniSpinnerContainer}
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

  ${({ mini }) => mini && miniSpinner}

  @keyframes spin {
    from {
      transform: rotate(0);
      border-color: ${({ theme }) => theme.primary_I};
      border-left-color: transparent;
    }

    50% {
      border-color: ${({ theme }) => theme.primary_II};
      border-left-color: transparent;
    }

    to {
      transform: rotate(360deg);
      border-color: ${({ theme }) => theme.primary_I};
      border-left-color: transparent;
    }
  }
`;
