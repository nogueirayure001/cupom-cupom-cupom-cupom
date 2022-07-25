import { useState, useCallback, useEffect } from 'react';

import { httpGetFeaturedStores } from './index';

function useFeaturedStores() {
  const [stores, setStores] = useState([]);

  const getFeaturedStores = useCallback(async () => {
    const response = await httpGetFeaturedStores();

    if (response.requestInfo.success) {
      setStores(response.data);
    }
  }, []);

  useEffect(() => {
    getFeaturedStores();
  }, [getFeaturedStores]);

  return stores;
}

export default useFeaturedStores;
