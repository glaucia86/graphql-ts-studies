/**
 * file: src/graphql/typeDefs/schema.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { products, categories } = require('../../data/db');

exports.Query = {
  hello:(parent, args, ctx) => {
    return 'Hi, Developers!'
  },

  products: (parent, args, ctx) => {
    return products;
  },

  product: (parent, args, ctx) => {
    const { id } = args;
    return products.find((product) => product.id === id);
  },

  categories: (parent, args, ctx) => categories,
  category: (parent, args, ctx) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  }
};