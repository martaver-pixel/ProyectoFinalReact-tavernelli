export const getProductsById = (productId) => {
  return products.find((prod) => prod.id === productId);
};

export const getProductsByCategory = (productCategory) => {
  return products.filter((prod) => prod.category === productCategory);
};
