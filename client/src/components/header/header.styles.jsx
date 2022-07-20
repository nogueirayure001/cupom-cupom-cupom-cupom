import styled, { css } from "styled-components";

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

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Contrast = styled.span`
  color: #0a62d0;
`;

export const Navigation = styled.nav`
  width: 100%;
  padding: 12px;
  background-color: #191718;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 190px;
  padding: 0 30px;
  margin: 0 auto;
  height: ${({ menuOpen }) => (menuOpen ? "180px" : "0")};
  overflow: hidden;
  transition: height 300ms ease;

  @media screen and (min-width: 425px) {
    flex-direction: row;
    height: auto;
    width: 100%;
    overflow: visible;
  }

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
  width: 100%;
  border: 2px solid #f9f7f0;
  border-radius: 6px;
  transition: all 300ms ease;

  @media screen and (min-width: 425px) {
    width: auto;
  }

  &:hover {
    right: 5px;
    bottom: 5px;
    border-color: #f9f7f0;
    box-shadow: 5px 5px 0 0 #f9f7f0;
  }

  a {
    display: block;
    padding: 8px 12px;
    width: 100%;
    text-align: center;

    @media screen and (min-width: 768px) {
      padding: 12px 16px;
    }
  }
`;

const HorizontalBar = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: center;
  width: 40px;
  height: 6px;
  border-radius: 40px;
  background-color: white;
  transition: all 200ms ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 40px;
    height: 8px;
    border: 2px solid white;
    border-radius: 40px;
    background-color: white;
    transition: all 500ms ease;
  }

  &::before {
    transform: translateY(-14px);
  }

  &::after {
    transform: translateY(12px);
  }
`;

const MenuButtonAnimation = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  ${({ menuOpen }) =>
    menuOpen &&
    css`
      ${HorizontalBar} {
        width: 0%;

        &::before {
          transform: translateY(0) rotate(45deg);
        }

        &::after {
          transform: translateY(0) rotate(-45deg);
        }
      }
    `}
`;

const MenuButton = ({ menuOpen, ...otherProps }) => (
  <button type='button' {...otherProps}>
    <MenuButtonAnimation menuOpen={menuOpen}>
      <HorizontalBar />
    </MenuButtonAnimation>
  </button>
);

export const MenuToggler = styled(MenuButton)`
  display: block;
  margin: 0 auto;
  cursor: pointer;

  @media screen and (min-width: 425px) {
    display: none;
  }
`;
