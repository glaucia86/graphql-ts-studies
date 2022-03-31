/**
 * file: src/graphql/resolvers/Product.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  }
}