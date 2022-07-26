import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();

  const menuToggleHandler = () => setMenuOpen(!menuOpen);

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

      <Navigation>
        <MenuToggler menuOpen={menuOpen} onClick={menuToggleHandler} />

        <NavList menuOpen={menuOpen}>
          <NavItem active={pathname === '/'}>
            <Link to='/'>Inicio</Link>
          </NavItem>

          <NavItem active={pathname === '/coupons'}>
            <Link to='/coupons'>Coupons</Link>
          </NavItem>

          <NavItem active={pathname === '/offers'}>
            <Link to='/offers'>Ofertas</Link>
          </NavItem>

          <NavItem active={pathname === '/stores'}>
            <Link to='/stores'>Lojas</Link>
          </NavItem>

          <NavItem active={pathname === '/categories'}>
            <Link to='/categories'>Categorias</Link>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
