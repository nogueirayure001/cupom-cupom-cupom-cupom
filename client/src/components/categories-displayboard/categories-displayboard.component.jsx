import { useContext } from 'react';

import { CategoriesContext } from '../../contexts';
import { CategoriesDisplayboardContainer, StyledLink } from './index';

function CategoriesDisplayboard(props) {
  const categories = useContext(CategoriesContext);

  return (
    <CategoriesDisplayboardContainer>
      {categories.map((category) => (
        <StyledLink to={`/coupons/search/${category.replace('/', '%2F')}`}>
          {category}
        </StyledLink>
      ))}
    </CategoriesDisplayboardContainer>
  );
}

export default CategoriesDisplayboard;
