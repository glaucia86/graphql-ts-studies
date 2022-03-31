/**
 * file: src/graphql/resolvers/Mutation.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { v4: uuid } = require('uuid');

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;

    const newCategory = {
      id: uuid(),
      name
    };

    categories.push(newCategory);

    return newCategory;
  },

  addProduct: (parent, { input }, { products }) => {
    const { name, image, price, onSale, quantity, categoryId } = input;

    const newProduct = {
      id: uuid(),
      name,
      image,
      price,
      onSale,
      quantity,
      categoryId
    };

    products.push(newProduct);

    return newProduct;
  },

  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;

    const newReviews = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId
    };

    reviews.push(newReviews);

    return newReviews;
  }
}