const API_URL = 'http://localhost:8000';

async function httpFetchAPIResource(resourceRelativePath, queryParams = {}) {
  let queryString = '';

  for (const [key, value] of Object.entries(queryParams)) {
    queryString += `${key}=${value}`;
  }

  const fullPath = queryString
    ? `${API_URL}${resourceRelativePath}?${queryString}`
    : `${API_URL}${resourceRelativePath}`;

  const response = await fetch(fullPath);

  return await response.json();
}

export { httpFetchAPIResource };
