const BASE_URL = 'https://voodoo-sandbox.myshopify.com';

export async function products(limit, page) {
  const response = await fetch(
    `${BASE_URL}/products.json?limit=${limit}&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}
