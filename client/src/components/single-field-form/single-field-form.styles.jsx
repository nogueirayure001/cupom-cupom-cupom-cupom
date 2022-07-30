import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 500px;
  border: 3px solid
    ${({ theme, darkBorder }) =>
      darkBorder ? theme.secondary_II : theme.neutral_II};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.neutral_II};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 680px;
    padding: 4px 0;
  }

  input {
    flex: 1 1 auto;
    width: 100%;
    height: 3rem;
    padding: 0 124px 0 24px;
    border: 1px solid blue;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.secondary_I};
    border: none;
    background-color: transparent;
    outline: none;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
    }

    &::placeholder {
      font-size: 0.75rem;

      @media screen and (min-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  flex: 0 0 100px;
  width: 100px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral_II};
  background-color: ${({ theme }) => theme.secondary_II};

  &:hover {
    color: ${({ theme }) => theme.primary_II};
    background-color: ${({ theme }) => theme.secondary_I};
  }

  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
