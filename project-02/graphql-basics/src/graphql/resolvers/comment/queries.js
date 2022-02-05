/**
 * file: src/graphql/resolvers/comment/queries.js
 * description: file responsible for return all queries related with 'Comment'
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const commentQueries = {
  comments:  (parent, args, { db }, info) => {
    return db.comments;
  },
};

export default commentQueries;