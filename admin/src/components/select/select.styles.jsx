import styled, { css } from 'styled-components';

import { Input } from '../input';

const shrinkLabel = css`
  top: -20px;
  transform: translate(-50%, 0%);
  font-size: 0.75rem;
  color: ${({ theme }) => theme.detail_I};
`;

const activeSelectorStyles = css`
  border-color: ${({ error, theme }) =>
    error ? theme.detail_II : theme.alert_I};

  &::after {
    color: ${({ error, theme }) => (error ? theme.detail_II : theme.alert_I)};
  }
`;

const activeOptionStyles = css`
  background-color: ${({ theme }) => theme.primary_I};
  color: ${({ theme }) => theme.detail_I};
`;

export const SelectContainer = styled.div`
  position: relative;
  border: 2px solid;
  border-radius: 6px;
  border-color: ${({ active, error, theme }) => {
    if (active) {
      return error ? theme.detail_II : theme.alert_I;
    } else {
      return error ? theme.detail_II : theme.neutral_I;
    }
  }};
  background-color: ${({ theme }) => theme.detail_I};
  transition: all 300ms ease;

  &:focus-within {
    ${activeSelectorStyles}
  }

  &::after {
    content: '\\2023';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) rotate(90deg);
    width: 30px;
    height: 30px;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
    color: ${({ active, error, theme }) => {
      if (active) {
        return error ? theme.detail_II : theme.alert_I;
      } else {
        return error ? theme.detail_II : theme.neutral_I;
      }
    }};
    background-color: transparent;
    cursor: pointer;
    transition: all 300ms ease;
    z-index: 2;
  }
`;

export const StyledSelect = styled(Input)`
  position: relative;

  label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.neutral_I};
    cursor: pointer;
    transition: all 300ms ease;

    ${({ value, shrink }) => (value || shrink ? shrinkLabel : null)}
  }

  input {
    position: relative;
    width: 100%;
    padding: 12px 16px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.neutral_I};
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    z-index: 3;

    &:focus {
      & ~ label {
        ${shrinkLabel}
      }
    }
  }
`;

export const OptionsList = styled.ul`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
  width: 100%;
  max-height: 200px;
  border: 2px solid ${({ theme }) => theme.primary_I};
  background-color: ${({ theme }) => theme.detail_I};
  overflow: auto;
  z-index: 9999;
`;

export const Option = styled.li`
  padding: 4px 12px;
  text-align: center;

  &:hover {
    ${activeOptionStyles}
    opacity: ${({ active }) => (active ? '1' : '0.7')};
  }

  ${({ active }) => active && activeOptionStyles}
`;
