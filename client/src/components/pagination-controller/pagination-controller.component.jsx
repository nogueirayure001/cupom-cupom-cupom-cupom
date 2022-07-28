import { useNavigate } from 'react-router-dom';

import { useWidthObserver } from '../../hooks';
import {
  PaginationContainer,
  StyledButton,
  createPaginationArray
} from './index';

function PaginationController({ page, totalPages }) {
  const navigate = useNavigate();

  const width = useWidthObserver();

  const paginationControlsQt = width < 425 ? 3 : width < 768 ? 5 : 8;

  const pagesArray = createPaginationArray(
    page,
    totalPages,
    paginationControlsQt
  );

  const changePage = (newPage) => navigate(`/coupons/${newPage}`);

  const previousPageHandler = () => changePage(page - 1);

  const nextPageHandler = () => changePage(page + 1);

  const changePageHandler = (e) => {
    const { value } = e.target;

    changePage(value);
  };

  return (
    <PaginationContainer>
      <StyledButton onClick={previousPageHandler} disabled={page === 1}>
        &#8678;
      </StyledButton>

      {pagesArray.map((value) => {
        return (
          <StyledButton
            selected={page === value}
            disabled={page === value}
            value={value}
            onClick={changePageHandler}
          >
            {value}
          </StyledButton>
        );
      })}

      <StyledButton onClick={nextPageHandler} disabled={page === totalPages}>
        &#8680;
      </StyledButton>
    </PaginationContainer>
  );
}

export default PaginationController;
