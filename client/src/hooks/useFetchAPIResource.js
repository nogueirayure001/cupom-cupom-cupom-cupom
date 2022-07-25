import { useState, useCallback, useEffect } from 'react';

import { httpFetchAPIResource } from './index';

function useFetchAPIResource(resourceRelativePath) {
  const [resource, saveResource] = useState([]);

  const fetchAPIResource = useCallback(async () => {
    const response = await httpFetchAPIResource(resourceRelativePath);

    if (response.requestInfo.success) {
      saveResource(response.data);
    }
  }, [resourceRelativePath]);

  useEffect(() => {
    fetchAPIResource();
  }, [fetchAPIResource]);

  return resource;
}

export default useFetchAPIResource;
