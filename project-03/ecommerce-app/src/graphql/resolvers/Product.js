/**
 * file: src/graphql/typeDefs/schema.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((category) => category.id === categoryId);
  }
}