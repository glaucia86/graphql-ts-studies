/**
 * file: src/graphql/typeDefs/schema.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

exports.Query = {
  hello:(parent, args, ctx) => {
    return 'Hi, Developers!'
  },

  products: (parent, { filter }, { products }) => {
    let filteredProducts = products

    if(filter) {
      if(filter.onSale === true) {
        filteredProducts = filteredProducts.filter(product => {
          return product.onSale
        })
      }
    }

    return filteredProducts;
  },

  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },

  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  }
};