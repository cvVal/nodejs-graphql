const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      console.log('Getting the products...');
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getAllProductsByPrice(args.min, args.max);
    },
    product: (_, { id }) => {
      return productsModel.getProductById(id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
