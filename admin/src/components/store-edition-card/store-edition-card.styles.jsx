import styled from 'styled-components';

import { Button } from '../button';
import { Form } from '../form';

export const StyledForm = styled(Form)`
  @media screen and (min-width: 768px) {
    flex: 1 0 400px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.neutral_I};
`;

export const DeleteButton = styled(Button)`
  width: 100%;
  height: 60px;
`;

export const ErrorMessage = styled.p`
  display: ${({ show }) => (show ? 'block' : 'none')};
  font-weight: 700;
  color: ${({ theme }) => theme.detail_II};
  text-align: center;
`;
