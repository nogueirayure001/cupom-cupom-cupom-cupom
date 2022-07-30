import { createContext, useEffect, useState } from 'react';

import { httpFetchAPIResource } from '../utils';

const CategoriesContext = createContext([]);

function CategoriesContextProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const resourcePath = '/coupons/categories';

      const { data } = await httpFetchAPIResource(resourcePath);

      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}

export { CategoriesContext, CategoriesContextProvider };
