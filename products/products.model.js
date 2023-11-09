const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    proce: 42.12,
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    proce: 55.55,
  },
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
