import { useState } from "react";
import { Link } from "react-router-dom";

import {
  HeaderContainer,
  SitePresentation,
  TextWrapper,
  SiteTitle,
  SubTitle,
  Navigation,
  NavList,
  NavItem,
  HorizontalBar,
  MenuButtonAnimation,
} from "./index";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => setMenuOpen(!menuOpen);

  return (
    <HeaderContainer>
      <SitePresentation>
        <TextWrapper>
          <SiteTitle>
            <span>CUPOM! CUPOM!</span>
            <span>CUPOM! CUPOM!</span>
          </SiteTitle>

          <SubTitle>Compre tudo que desejar por um precinho especial.</SubTitle>
        </TextWrapper>
      </SitePresentation>

      <Navigation>
        <MenuButtonAnimation menuOpen={menuOpen} onClick={menuToggleHandler}>
          <HorizontalBar />
        </MenuButtonAnimation>

        <NavList menuOpen={menuOpen}>
          <NavItem>
            <Link to='/coupons'>Coupons</Link>
          </NavItem>

          <NavItem>
            <Link to='/stores'>Lojas</Link>
          </NavItem>

          <NavItem>
            <Link to='/categories'>Categorias</Link>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
