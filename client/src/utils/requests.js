const API_URL = 'http://localhost:8000';

const DEFAULT_CONFIGS = {
  method: 'GET'
};

async function httpFetchAPIResource(
  resourceRelativePath,
  queryParams = {},
  configs = DEFAULT_CONFIGS
) {
  let query = [];

  for (const [key, value] of Object.entries(queryParams)) {
    query.push(`${key}=${value}`);
  }

  const fullPath = query.length
    ? `${API_URL}${resourceRelativePath}?${query.join('&')}`
    : `${API_URL}${resourceRelativePath}`;

  const response = await fetch(fullPath, configs);

  return await response.json();
}

export { httpFetchAPIResource };
