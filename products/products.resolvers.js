const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      console.log('Getting the products...');
      return productsModel.getAllProducts;
    },
    productsByPrice: (_, args) => {
      return productsModel.getAllProductsByPrice(args.min, args.max);
    },
    product: (_, { id }) => {
      return productsModel.getProductById(id);
    },
  },
};
