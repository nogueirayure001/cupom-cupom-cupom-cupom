const API_URL = 'http://localhost:8000/api';

const DEFAULT_CONFIGS = {
  method: 'GET'
};

export async function httpRequest(
  resourcePath,
  query = {},
  configs = DEFAULT_CONFIGS
) {
  let queryString = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const URL = queryString
    ? `${API_URL}${resourcePath}?${queryString}`
    : `${API_URL}${resourcePath}`;

  const response = await fetch(URL, configs);

  return await response.json();
}
