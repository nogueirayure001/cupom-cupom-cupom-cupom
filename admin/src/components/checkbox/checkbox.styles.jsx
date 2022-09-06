import styled from 'styled-components';

import { Input } from '../input';

export const StyledCheckbox = styled(Input)`
  position: relative;
  width: 100%;
  max-width: 220px;

  label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    color: ${({ theme }) => theme.neutral_I};
    transition: all 300ms ease;
    cursor: pointer;
  }

  input {
    width: 100%;
    padding: 28px 16px;
    border: 2px solid ${({ theme }) => theme.neutral_I};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.detail_I};
    outline: none;
    transition: all 300ms ease;
    cursor: pointer;

    &:checked {
      border: 2px solid ${({ theme }) => theme.alert_I};
      background-color: ${({ theme }) => theme.alert_I};
    }

    &:checked ~ label {
      color: ${({ theme }) => theme.detail_I};
    }
`;
