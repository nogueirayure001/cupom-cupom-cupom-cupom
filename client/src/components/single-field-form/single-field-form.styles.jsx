import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 100%;
  border: 3px solid
    ${({ theme, inverted }) => (inverted ? theme.primary_II : theme.neutral_II)};
  height: 3rem;
  border-radius: 6px;
  overflow: hidden;

  input {
    flex: 1 1 auto;
    width: 100%;
    padding: 0 12px;
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.secondary_I};
    border: none;
    outline: none;
    background-color: ${({ theme, inverted }) =>
      inverted ? theme.primary_II : theme.neutral_II};
  }
`;

export const Button = styled.button`
  flex: 0 0 100px;
  width: 100px;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme, inverted }) =>
    inverted ? theme.primary_II : theme.neutral_II};
  background-color: ${({ theme }) => theme.secondary_II};

  &:hover {
    color: ${({ theme, inverted }) =>
      inverted ? theme.neutral_II : theme.primary_II};
    background-color: ${({ theme }) => theme.secondary_I};
  }
`;
