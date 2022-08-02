import styled from 'styled-components';

import { SingleFieldForm } from '../../components/single-field-form';
import { Input } from '../../components/input';

export const SearchForm = styled(SingleFieldForm)`
  margin: 0 auto;
`;

export const FiltersSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const LegendContainer = styled.div`
  width: 100%;
  height: 42px;
`;

export const Legend = styled.legend`
  position: relative;
  height: 100%;
  width: 42px;
  margin: 0 auto;
  text-indent: -9999px;
  cursor: pointer;
`;

export const FilterIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.detail_II};

  &::before {
    content: '';
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 70%;
    height: 8px;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.detail_II};
  }

  &::after {
    content: '';
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 30%;
    height: 8px;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.detail_II};
  }
`;

export const CheckboxesContainer = styled.div`
  height: ${({ show }) => (show ? '102px' : '0')};
  margin-top: 8px;
  overflow: hidden;
  transition: height 300ms ease;
`;

export const Checkbox = styled(Input)`
  display: flex;
  gap: 6px;
  align-items: center;

  input {
    position: relative;
    width: 28px;
    height: 28px;
    border: 2px solid ${({ theme }) => theme.secondary_II};
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 300ms ease;

    &:checked {
      background-color: ${({ theme }) => theme.detail_II};

      &::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        display: block;
        width: 10px;
        height: 18px;
        border: 3px solid ${({ theme }) => theme.neutral_II};
        border-top: 0px;
        border-left: 0px;
        border-radius: 3px;
      }
    }
  }

  label {
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
  }

  &:hover {
    label {
      color: ${({ theme }) => theme.primary_II};
    }

    input {
      &:not(:checked) {
        border-color: ${({ theme }) => theme.primary_II};
      }
    }
  }
`;
