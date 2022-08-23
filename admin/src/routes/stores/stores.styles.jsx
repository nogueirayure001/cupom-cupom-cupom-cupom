import styled from 'styled-components';

import { Button } from '../../components/button';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ErrorMessage = styled.p`
  display: ${({ show }) => (show ? 'block' : 'none')};
  font-weight: 700;
  color: ${({ theme }) => theme.detail_II};
  text-align: center;
`;

export const CreateButton = styled(Button)`
  height: 60px;
  background-color: ${({ theme }) => theme.neutral_I};
`;

export const DisplayBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`;
