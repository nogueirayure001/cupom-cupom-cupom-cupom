import styled from 'styled-components';

export const Paragraph = styled.p`
  margin-bottom: 12px;
  text-align: center;
  opacity: 0.8;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.neutral_II};
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
  }
`;

export const SubscribeButton = styled.button.attrs({ type: 'submit' })`
  flex: 0 0 100px;
  width: 100px;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.secondary_II};

  &:hover {
    color: ${({ theme }) => theme.primary_II};
    background-color: ${({ theme }) => theme.secondary_I};
  }
`;
