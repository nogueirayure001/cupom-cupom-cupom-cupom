import { createContext, useState } from 'react';

import { httpFetchAPIResource } from '../utils';

const PaginatedCouponsContext = createContext({
  coupons: [],
  pagination: {},
  changePage: () => {}
});

function PaginatedCouponsContextProvider({ children }) {
  const [coupons, setCoupons] = useState([]);
  const [pagination, setPagination] = useState({});

  const changePage = async (newPage) => {
    const relativePath = `/coupons/paginated`;
    const queryParams = { page: newPage };

    const { pagination, data } = await httpFetchAPIResource(
      relativePath,
      queryParams
    );

    setCoupons(data);
    setPagination(pagination);
  };

  const value = {
    coupons: coupons,
    pagination: pagination,
    changePage: changePage
  };

  return (
    <PaginatedCouponsContext.Provider value={value}>
      {children}
    </PaginatedCouponsContext.Provider>
  );
}

export { PaginatedCouponsContext, PaginatedCouponsContextProvider };
