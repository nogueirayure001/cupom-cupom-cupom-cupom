import { createContext, useEffect, useState } from 'react';

import { httpFetchAPIResource } from '../utils';

const FeaturedStoresContext = createContext([]);

function FeaturedStoresContextProvider({ children }) {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getFeaturedStores = async () => {
      const resourcePath = '/stores/featured';
      const { data } = await httpFetchAPIResource(resourcePath);

      setStores(data);
    };

    getFeaturedStores();
  }, []);

  return (
    <FeaturedStoresContext.Provider value={stores}>
      {children}
    </FeaturedStoresContext.Provider>
  );
}

export { FeaturedStoresContext, FeaturedStoresContextProvider };
