import { createContext, useState } from 'react';

const DEFAULT_FILTERS = {
  store: false,
  category: false,
  keyword: false
};

const CouponsSearchFiltersContext = createContext({
  filters: DEFAULT_FILTERS,
  updateFilters: () => {}
});

function CouponsSearchFiltersContextProvider({ children }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const updateFilters = (key, value) => {
    setFilters({
      ...filters,
      [key]: value
    });
  };

  const value = { filters, updateFilters };

  return (
    <CouponsSearchFiltersContext.Provider value={value}>
      {children}
    </CouponsSearchFiltersContext.Provider>
  );
}

export { CouponsSearchFiltersContext, CouponsSearchFiltersContextProvider };
