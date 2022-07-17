import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SitePresentation = styled.div`
  width: 100%;
  padding: 48px 24px;
  background-image: url(../../assets/images/header-bg.jpg);
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    background-position: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 400px;
  padding: 24px 16px;
  margin: 0 auto;
  text-align: center;
  color: #f9f7f0;
  border: 3px dashed #f9f7f0;
  background-color: #181617e6;

  transform: scale(0.1) rotate(3600deg);
  animation-name: logo-fall;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;

  @keyframes logo-fall {
    from {
      animation-timing-function: cubic-bezier(0.7, 0.22, 0.725, 0.61);
    }
    13.33% {
      animation-timing-function: cubic-bezier(0.16, 0.1875, 0.24, 0.094);
    }
    23.66% {
      animation-timing-function: cubic-bezier(0.234, 0.15, 0.88, 0.85);
    }
    65% {
      animation-timing-function: linear;
    }
    100% {
      transform: scale(1) rotate(0);
    }
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
