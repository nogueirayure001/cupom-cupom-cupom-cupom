import styled, { css } from 'styled-components';

export const List = styled.ul`
  ${({ horizontal }) =>
    horizontal &&
    css`
      display: flex;
      gap: 16px;
    `}

  text-align: center;
`;

export const NormalItem = styled.li`
  color: ${({ theme }) => theme.neutral_II};
  opacity: 0.8;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 1;
  }

  &:not(:first-of-type) {
    margin-top: 6px;
  }
`;

export const IconItem = styled.li`
  a {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 42px;
    height: 42px;
    margin: 0 auto;
    text-indent: -9999px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondary_II};
    background-image: url(${'../../assets/images/icons.svg'});
    background-size: 570%;
    background-position: 0 0;
    background-repeat: no-repeat;
    box-shadow: 0 0 0 0 ${({ theme }) => theme.neutral_II};
    transition: all 300ms ease;

    &:hover {
      top: -3px;
      left: -3px;
      box-shadow: 3px 3px 0 0 ${({ theme }) => theme.neutral_II};
    }
  }

  &:nth-child(1) a {
    background-position: -10px -8px;
  }

  &:nth-child(2) a {
    background-position: -8px -61px;
  }

  &:nth-child(3) a {
    background-position: -69px -5px;
  }
`;
