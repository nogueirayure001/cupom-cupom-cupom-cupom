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
} from "./index";

function Header(props) {
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
        <NavList>
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
