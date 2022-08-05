import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAll, loadCategoriesAsync } from '../../store/categories';
import { CategoriesDisplayboardContainer, StyledLink } from './index';

function CategoriesDisplayboard(props) {
  const { categories } = useSelector(selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategoriesAsync);
  }, []);

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
