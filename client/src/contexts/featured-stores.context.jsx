import { createContext } from 'react';
import { useFeaturedStores } from '../hooks';

const DEFAULT_FEATURED_STORES = [];

const FeaturedStoresContext = createContext(DEFAULT_FEATURED_STORES);

function FeaturedStoresContextProvider({ children }) {
  const stores = useFeaturedStores();

  return (
    <FeaturedStoresContext.Provider value={stores}>
      {children}
    </FeaturedStoresContext.Provider>
  );
}

export { FeaturedStoresContext, FeaturedStoresContextProvider };
