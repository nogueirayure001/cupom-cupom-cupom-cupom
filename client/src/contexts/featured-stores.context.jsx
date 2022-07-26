import { createContext } from 'react';

import { useFetchAPIResource } from '../hooks';

const DEFAULT_FEATURED_STORES = [];

const FeaturedStoresContext = createContext(DEFAULT_FEATURED_STORES);

function FeaturedStoresContextProvider({ children }) {
  const resourcePath = '/stores/featured';
  const resource = useFetchAPIResource(resourcePath);

  const stores = resource.data || [];

  return (
    <FeaturedStoresContext.Provider value={stores}>
      {children}
    </FeaturedStoresContext.Provider>
  );
}

export { FeaturedStoresContext, FeaturedStoresContextProvider };
