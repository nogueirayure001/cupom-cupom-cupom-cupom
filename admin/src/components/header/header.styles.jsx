import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SitePresentation = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.primary_II};
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  position: relative;
  max-width: 280px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.neutral_I};
  z-index: 3;

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 600px;
  }
`;

export const SiteTitle = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  font-weight: 700;
  font-size: 2rem;

  @media screen and (min-width: 425px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const SubTitle = styled.p`
  margin-top: 16px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutral_II};

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Contrast = styled.span`
  position: relative;
  color: ${({ theme }) => theme.neutral_II};
`;

export const StoreNameContainer = styled.span`
  &:nth-of-type(1) {
    ${Contrast} {
      &:nth-child(1) {
        color: ${({ theme }) => theme.neutral_I};

        @media screen and (max-width: 424.999px) {
          top: -600px;
          animation: slide-in-top 2s forwards;

          @keyframes slide-in-top {
            to {
              top: 0;
            }
          }
        }
      }

      &:nth-child(2) {
        @media screen and (max-width: 424.999px) {
          right: -120%;
          animation: slide-in-right 2s forwards;

          @keyframes slide-in-right {
            to {
              right: 0;
            }
          }
        }
      }
    }
  }

  &:nth-of-type(2) {
    ${Contrast} {
      &:nth-child(1) {
        @media screen and (max-width: 424.999px) {
          left: -120%;
          animation: slide-in-left 2s forwards;

          @keyframes slide-in-left {
            to {
              left: 0;
            }
          }
        }
      }

      &:nth-child(2) {
        color: ${({ theme }) => theme.neutral_I};

        @media screen and (max-width: 424.999px) {
          bottom: -600px;
          animation: slide-in-bottom 2s forwards;

          @keyframes slide-in-bottom {
            to {
              bottom: 0;
            }
          }
        }
      }
    }
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.secondary_I};
  z-index: 999;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 220px;
  padding: 0 30px;
  margin: 0 auto;
  height: ${({ menuOpen }) => (menuOpen ? '146.8px' : '0')};
  overflow: hidden;
  transition: height 300ms ease;

  @media screen and (min-width: 640px) {
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
  font-weight: 700;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.neutral_II};
  border: 2px solid
    ${({ theme, active }) => (active ? theme.primary_II : theme.neutral_II)};
  border-radius: 6px;
  transition: all 300ms ease;

  @media screen and (min-width: 640px) {
    width: auto;
  }

  &:hover {
    right: 5px;
    bottom: 5px;
    box-shadow: 5px 5px 0 0
      ${({ theme, active }) => (active ? theme.primary_II : theme.neutral_II)};
  }

  a {
    display: block;
    padding: 8px 12px;
    width: 100%;
    text-align: center;
  }
`;

export const LogoutButton = styled.span`
  display: block;
  padding: 8px 12px;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const HorizontalBar = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: center;
  width: 40px;
  height: 6px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.primary_II};
  transition: all 200ms ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 40px;
    height: 8px;
    border: 2px solid ${({ theme }) => theme.neutral_II};
    border-radius: 40px;
    background-color: ${({ theme }) => theme.neutral_II};
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
        background-color: ${({ theme }) => theme.secondary_I};

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

  @media screen and (min-width: 640px) {
    display: none;
  }
`;
