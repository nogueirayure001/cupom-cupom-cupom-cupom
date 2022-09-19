import styled from 'styled-components';
import { Button } from '../../components/button';

export const ErrorMessage = styled.p`
  display: ${({ show }) => (show ? 'block' : 'none')};
  font-weight: 700;
  color: ${({ theme }) => theme.detail_II};
  text-align: center;
`;

export const SendButton = styled(Button)`
  height: 60px;
  background-color: ${({ theme }) => theme.neutral_I};
`;
