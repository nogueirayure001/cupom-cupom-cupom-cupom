import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 560px;
  padding: 32px 16px;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.neutral_I};
  border-radius: 6px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(10, 98, 208, 1) 75%
  );

  @media screen and (min-width: 768px) {
    padding: 36px 24px;
  }

  & > * {
    width: 100%;
  }
`;
