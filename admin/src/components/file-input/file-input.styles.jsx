import styled, { css } from 'styled-components';

export const Label = styled.label`
  position: relative;
  width: 100%;
  padding: 12px 16px;
  margin-top: 16px;
  font-weight: 700;
  text-align: center;
  color: ${({ error, theme }) => (error ? theme.detail_II : theme.detail_I)};
  border: 2px solid ${({ theme }) => theme.secondary_II};
  border-radius: 6px;
  outline: none;
  background-color: ${({ theme }) => theme.secondary_I};
  cursor: pointer;

  &::after {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    width: 100%;
    color: ${({ theme }) => theme.detail_I};
    font-family: inherit;
    font-weight: 500;
    font-size: 0.8rem;

    content: ${({ content }) =>
      content ? `'${content}'` : `'Nenhum arquivo selecionado'`};
  }

  input {
    position: absolute;
    left: -9999px;
    opacity: 1;
  }
`;
