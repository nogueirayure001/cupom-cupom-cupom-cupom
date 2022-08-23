import styled from 'styled-components';

import { Button } from '../button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const DisplayboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  place-items: center;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 32px 24px;
  }
`;
