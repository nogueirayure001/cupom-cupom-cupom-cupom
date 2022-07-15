import styled from "styled-components";

import { ReactComponent as SearchLogo } from "../../assets/images/search-icon.svg";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SitePresentation = styled.div`
  width: 100%;
  padding: 48px 24px;
  background-image: url(../../assets/images/header-bg-small.jpg);
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    background-image: url(../../assets/images/header-bg-medium.jpg);
    background-position: bottom;
  }
`;

export const TextWrapper = styled.div`
  max-width: 400px;
  padding: 24px 16px;
  margin: 0 auto;
  text-align: center;
  color: #191718;
  border: 3px dashed #f9f7f0;
  background-color: #f9f7f080;
`;

export const SiteTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: "Abril Fatface", cursive;
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  margin-top: 16px;
  font-family: "Poppins", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  padding: 12px;
  background-color: #191718;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #f9f7f0;

  @media screen and (min-width: 768px) {
    padding: 20px;
    font-size: 1.1rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`;

export const NavItem = styled.li`
  position: relative;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    border: 2px solid #f9f7f0;
    border-radius: 6px;
    transition: all 300ms ease;

    &:hover {
      right: 5px;
      bottom: 5px;
      border-color: #f9f7f0;
      box-shadow: 5px 5px 0 0 #f9f7f0;
    }
  }

  a {
    display: block;
    padding: 8px 12px;

    @media screen and (min-width: 768px) {
      padding: 12px 16px;
    }
  }
`;

export const SearchButton = styled(SearchLogo)`
  width: 40px;
  padding: 0 8px;
  transition: transform 300ms ease;

  @media screen and (min-width: 768px) {
    width: 44px;
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
