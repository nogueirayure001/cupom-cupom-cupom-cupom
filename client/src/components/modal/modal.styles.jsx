import styled from 'styled-components';

import { Section } from '../section';
import { Button } from '../button';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: hsla(0, 0%, 100%, 20%);
  backdrop-filter: blur(2px);
  z-index: 9999;
`;

export const ModalBox = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  padding: 20px 16px;
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(10, 98, 208, 1) 75%
  );

  & > *:first-child {
    color: ${({ theme }) => theme.neutral_II};

    &::after {
      border-color: ${({ theme }) => theme.detail_II};
    }
  }
`;

export const Message = styled.p`
  width: 80%;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.neutral_II};

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const CloseButton = styled(Button)`
  width: 50%;
  max-width: 200px;
  margin-top: 32px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;
