import { useContext } from 'react';

import { CategoriesContext } from '../../contexts';
import { CategoriesDisplayboardContainer, StyledLink } from './index';

function CategoriesDisplayboard(props) {
  const categories = useContext(CategoriesContext);

  return (
    <CategoriesDisplayboardContainer>
      {categories.map((categorie) => (
        <StyledLink to={`/coupons/search/${categorie.replace('/', '%2F')}`}>
          {categorie}
        </StyledLink>
      ))}
    </CategoriesDisplayboardContainer>
  );
}

export default CategoriesDisplayboard;
