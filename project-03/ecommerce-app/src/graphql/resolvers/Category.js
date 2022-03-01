/**
 * file: src/graphql/typeDefs/schema.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { products } = require('../../data/db');

exports.Category = {
  products: (parent, args, ctx) => {
    const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  }
};