import styled from 'styled-components';

import { SingleFieldForm } from '../../components/single-field-form';

export const SearchForm = styled(SingleFieldForm)`
  margin: 0 auto;
`;

export const StoresDisplayContainer = styled.div`
  position: relative;
  left: ${({ offset }) => `-${offset}px`};
  width: ${({ offset }) => `calc(100% + 2 * ${offset}px)`};
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.detail_II};

  @media screen and (min-width: 425px) {
    padding: 48px 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 64px 32px;
  }

  @media screen and (min-width: 1024px) {
    padding: 64px 48px;
  }
`;
