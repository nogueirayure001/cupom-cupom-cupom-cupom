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
  StoreNameContainer,
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
            <StoreNameContainer>
              <Contrast>CUPOM!</Contrast> <Contrast>CUPOM!</Contrast>
            </StoreNameContainer>
            <StoreNameContainer>
              <Contrast>CUPOM!</Contrast> <Contrast>CUPOM!</Contrast>
            </StoreNameContainer>
          </SiteTitle>

          <SubTitle>Administração de Conteúdo</SubTitle>
        </TextWrapper>
      </SitePresentation>

      <Navigation ref={navRef}>
        <MenuToggler menuOpen={menuOpen} onClick={menuToggleHandler} />

        <NavList menuOpen={menuOpen}>
          <NavItem active={pathname === '/'}>
            <Link to='/'>Inicio</Link>
          </NavItem>

          <NavItem active={pathname.startsWith('/content')}>
            <Link to='/content'>Conteúdo</Link>
          </NavItem>

          <NavItem active={pathname.startsWith('/auth')}>
            <Link to='/auth'>Autenticar</Link>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
