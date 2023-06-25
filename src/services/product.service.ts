const BASE_URL = "https://dummyjson.com/products";

export const fetchProductsAPI = async (term = "") => {
  const query = term.length > 1 ? `/search?q=${term}` : "";
  const url = `${BASE_URL}${query}`;

  const response = await fetch(url);
  const products = await response.json();
  return products?.products ?? [];
};
