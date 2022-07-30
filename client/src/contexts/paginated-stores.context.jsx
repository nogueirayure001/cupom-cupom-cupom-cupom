import { createContext, useState } from 'react';

import { httpFetchAPIResource } from '../utils';

const PaginatedStoresContext = createContext({
  stores: [],
  pagination: {},
  changePage: () => {}
});

function PaginatedStoresContextProvider({ children }) {
  const [stores, setStores] = useState([]);
  const [pagination, setPagination] = useState({});

  const changePage = async (newPage) => {
    const relativePath = `/stores/paginated`;
    const queryParams = { page: newPage };

    const { pagination, data } = await httpFetchAPIResource(
      relativePath,
      queryParams
    );

    setStores(data);
    setPagination(pagination);
  };

  const value = {
    stores: stores,
    pagination: pagination,
    changePage: changePage
  };

  return (
    <PaginatedStoresContext.Provider value={value}>
      {children}
    </PaginatedStoresContext.Provider>
  );
}

export { PaginatedStoresContext, PaginatedStoresContextProvider };
