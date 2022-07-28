import styled from 'styled-components';

import { Button } from '../button';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 48px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
  }

  &:disabled {
    opacity: ${({ selected }) => (selected ? '1' : '0.5')};

    &:hover {
      top: 0;
      left: 0;
      box-shadow: none;
    }
  }
`;
