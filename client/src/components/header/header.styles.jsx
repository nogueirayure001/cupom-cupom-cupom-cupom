import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SitePresentation = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 16px;
  background-image: url(../../assets/images/header-bg.png);
  background-color: #c3cbd6;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
  overflow: hidden;

  @media screen and (min-width: 425px) {
    background-position: center left;
  }

  @media screen and (min-width: 768px) {
    padding: 32px 16px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: " ";
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 100%, 40%);
    backdrop-filter: blur(0.6px);

    @media screen and (min-width: 425px) {
      display: none;
    }
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  max-width: 300px;
  padding: 24px 16px;
  margin: 0 auto;
  text-align: center;
  color: #344648;
  z-index: 3;

  @media screen and (min-width: 425px) {
    margin: 0 0 0 auto;
    text-align: right;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;

    text-align: right;
  }

  @media screen and (min-width: 1024px) {
    max-width: 600px;
  }
`;

export const SiteTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1.75rem;

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

  border: 2px solid #f9f7f0;
  border-radius: 6px;
  transition: all 300ms ease;

  &:hover {
    right: 5px;
    bottom: 5px;
    border-color: #f9f7f0;
    box-shadow: 5px 5px 0 0 #f9f7f0;
  }

  a {
    display: block;
    padding: 8px 12px;

    @media screen and (min-width: 768px) {
      padding: 12px 16px;
    }
  }
`;
