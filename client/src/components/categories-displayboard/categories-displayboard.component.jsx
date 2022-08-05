import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAll, loadCategoriesAsync } from '../../store/categories';
import { Spinner } from '../spinner';
import { CategoriesDisplayboardContainer, StyledLink } from './index';

function CategoriesDisplayboard(props) {
  const { categories, isLoading } = useSelector(selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategoriesAsync);
  }, []);

  const loadingContent = <Spinner />;

  const loadedContent = categories.map((category) => (
    <StyledLink to={`/coupons/search/${category.replace('/', '%2F')}`}>
      {category}
    </StyledLink>
  ));

  return (
    <CategoriesDisplayboardContainer>
      {isLoading ? loadingContent : loadedContent}
    </CategoriesDisplayboardContainer>
  );
}

export default CategoriesDisplayboard;
