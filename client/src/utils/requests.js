const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://cupomcupomcupomcupom.herokuapp.com/api'
    : 'http://localhost:8000/api';

const DEFAULT_CONFIGS = {
  method: 'GET'
};

async function httpFetchAPIResource(
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

export { httpFetchAPIResource };
