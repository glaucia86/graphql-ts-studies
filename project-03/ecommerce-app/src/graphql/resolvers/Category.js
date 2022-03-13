/**
 * file: src/graphql/typeDefs/schema.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

exports.Category = {
  products: ({ id: categoryId }, args, { products }) => {
    return products.filter((product) => product.categoryId === categoryId);
  }
};