/* eslint-disable no-unused-vars */
/**
 * file: src/graphql/resolvers/user/queries.js
 * description: file responsible for return all queries related with 'User'
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const userQueries = {
  users: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  me: () => {
    return {
      id: '101112',
      name: 'Glaucia Lemos',
      email: 'glaucia@example.com',
      age: 35
    }
  },
};

export default userQueries;