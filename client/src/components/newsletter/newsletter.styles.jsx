import styled from 'styled-components';

import { SingleFieldForm } from '../single-field-form';

export const Paragraph = styled.p`
  margin-bottom: 12px;
  text-align: center;
  opacity: 0.8;
`;

export const UserEmailField = styled(SingleFieldForm)`
  width: 100%;
  max-width: none;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;
