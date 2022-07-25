const API_URL = 'http://localhost:8000';

async function httpFetchAPIResource(resourceRelativePath) {
  const response = await fetch(`${API_URL}${resourceRelativePath}`);

  return await response.json();
}

export { httpFetchAPIResource };
