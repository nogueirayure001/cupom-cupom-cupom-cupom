import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useOutsideClickCloser from '../../hooks/useOutsideClickCloser';

import {
  HeaderContainer,
  SitePresentation,
  TextWrapper,
  SiteTitle,
  SubTitle,
  Navigation,
  NavList,
  NavItem,
  MenuToggler,
  Contrast
} from './index';

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const { pathname } = useLocation();

  useOutsideClickCloser(navRef, setMenuOpen);

  const menuToggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <SitePresentation>
        <TextWrapper>
          <SiteTitle>
            <span>
              CUPOM! <Contrast>CUPOM!</Contrast>
            </span>
            <span>
              <Contrast>CUPOM!</Contrast> CUPOM!
            </span>
          </SiteTitle>

          <SubTitle>Compre tudo que desejar por um precinho especial.</SubTitle>
        </TextWrapper>
      </SitePresentation>

      <Navigation ref={navRef}>
        <MenuToggler menuOpen={menuOpen} onClick={menuToggleHandler} />

        <NavList menuOpen={menuOpen}>
          <NavItem active={pathname === '/'}>
            <Link to='/'>Inicio</Link>
          </NavItem>

          <NavItem active={pathname.startsWith('/coupons')}>
            <Link to='/coupons'>Coupons</Link>
          </NavItem>

          <NavItem active={pathname.startsWith('/stores')}>
            <Link to='/stores'>Lojas</Link>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
