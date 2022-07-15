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
  SearchButton,
} from "./index";

function Header(props) {
  return (
    <HeaderContainer>
      <SitePresentation>
        <TextWrapper>
          <SiteTitle>
            <span>CUPOM! CUPOM!</span>
            <span>CUPOM!</span>
          </SiteTitle>

          <SubTitle>Compre tudo que desejar por um precinho especial.</SubTitle>
        </TextWrapper>
      </SitePresentation>

      <Navigation>
        <NavList>
          <NavItem>
            <Link to='/stores'>Lojas</Link>
          </NavItem>

          <NavItem>
            <Link to='/categories'>Categorias</Link>
          </NavItem>

          <NavItem>
            <SearchButton />
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
