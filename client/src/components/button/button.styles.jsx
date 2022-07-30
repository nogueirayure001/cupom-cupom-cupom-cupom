import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  top: 0;
  left: 0;
  padding: 12px 16px;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: ${({ theme, selected }) =>
    selected ? theme.primary_II : theme.neutral_II};
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.detail_II};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.secondary_II};
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    top: -3px;
    left: -3px;
    box-shadow: 3px 3px 0 0 ${({ theme }) => theme.secondary_II};
  }
`;
