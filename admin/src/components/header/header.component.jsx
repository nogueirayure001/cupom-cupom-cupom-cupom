import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectAuthState, logoutAsync } from '../../store/auth';
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
  LogoutButton,
  MenuToggler,
  StoreNameContainer,
  Contrast
} from './index';

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, token } = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const navRef = useRef();
  const { pathname } = useLocation();

  useOutsideClickCloser(navRef, setMenuOpen);

  const menuToggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const logoutHandler = () => {
    dispatch(logoutAsync(token));
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

          <NavItem active={pathname.startsWith('/auth')}>
            {user ? (
              <LogoutButton onClick={logoutHandler}>logout</LogoutButton>
            ) : (
              <Link to='/login'>Autenticar</Link>
            )}
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
