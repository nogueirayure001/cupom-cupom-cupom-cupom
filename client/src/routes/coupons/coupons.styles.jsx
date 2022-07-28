import styled from 'styled-components';

import { SingleFieldForm } from '../../components/single-field-form';

export const SearchForm = styled(SingleFieldForm)`
  margin: 0 auto;
  max-width: 500px;

  @media screen and (min-width: 768px) {
    max-width: 80%;
  }
`;
