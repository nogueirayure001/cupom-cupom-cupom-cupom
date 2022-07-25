import { createContext } from 'react';

import { useFetchAPIResource } from '../hooks';

const DEFAULT_FEATURED_STORES = [];

const FeaturedStoresContext = createContext(DEFAULT_FEATURED_STORES);

function FeaturedStoresContextProvider({ children }) {
  const resourcePath = '/stores/featured';
  const stores = useFetchAPIResource(resourcePath);

  return (
    <FeaturedStoresContext.Provider value={stores}>
      {children}
    </FeaturedStoresContext.Provider>
  );
}

export { FeaturedStoresContext, FeaturedStoresContextProvider };
