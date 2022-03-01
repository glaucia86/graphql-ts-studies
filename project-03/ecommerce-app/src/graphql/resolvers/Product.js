/**
 * file: src/graphql/typeDefs/schema.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { categories } = require('../../data/db');

exports.Product = {
  category: (parent, args, ctx) => {
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  }
}