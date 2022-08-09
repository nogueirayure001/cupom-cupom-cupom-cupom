import styled from 'styled-components';

import { Button } from '../button';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 48px;
  font-family: ${({ theme }) => theme.secondaryFontFamily};

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`;

export const StyledButton = styled(Button)`
  width: 50px;
  height: 50px;
  font-size: 0.75rem;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
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
