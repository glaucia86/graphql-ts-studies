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
    }

    categories.push(newCategory);

    return newCategory;
  }
}