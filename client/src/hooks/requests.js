const API_URL = 'http://localhost:8000';

async function httpGetFeaturedStores() {
  const response = await fetch(`${API_URL}/stores/featured`);

  return await response.json();
}

async function httpGetFeaturedCoupons() {
  const response = await fetch(`${API_URL}/coupons/featured`);

  return await response.json();
}

export { httpGetFeaturedStores, httpGetFeaturedCoupons };
