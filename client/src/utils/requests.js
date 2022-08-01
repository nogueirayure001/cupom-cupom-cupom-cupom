const API_URL = 'http://localhost:8000';

const DEFAULT_CONFIGS = {
  method: 'GET'
};

async function httpFetchAPIResource(
  resourceRelativePath,
  queryParams = {},
  configs = DEFAULT_CONFIGS
) {
  let queryString = '';

  for (const [key, value] of Object.entries(queryParams)) {
    queryString += `${key}=${value}`;
  }

  const fullPath = queryString
    ? `${API_URL}${resourceRelativePath}?${queryString}`
    : `${API_URL}${resourceRelativePath}`;

  const response = await fetch(fullPath, configs);

  return await response.json();
}

export { httpFetchAPIResource };
