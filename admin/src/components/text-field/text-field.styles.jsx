import styled, { css } from 'styled-components';

import { Input } from '../input';

const shrinkLabel = css`
  top: -20px;
  transform: translate(-50%, 0%);
  font-size: 0.75rem;
  color: ${({ theme }) => theme.detail_I};
`;

export const StyledInput = styled(Input)`
  width: 100%;
  position: relative;

  &:focus-within {
    input {
      border-color: ${({ error, theme }) =>
        error ? theme.detail_II : theme.alert_I};
    }
  }

  label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.neutral_I};
    transition: all 300ms ease;
    cursor: text;

    ${({ value }) => value && shrinkLabel}
  }

  input {
    width: 100%;
    padding: 12px 16px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.neutral_I};
    border: 2px solid
      ${({ error, theme }) => (error ? theme.detail_II : theme.neutral_I)};
    border-radius: 6px;
    outline: none;

    &:focus {
      & ~ label {
        ${shrinkLabel}
      }
    }
  }
`;
