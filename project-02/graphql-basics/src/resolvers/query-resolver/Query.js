/* eslint-disable no-unused-vars */
/**
 * file: src/resolvers/query-resolver/Query.js
 * description: file responsible for the 'Query' resolver.
 * date: 02/04/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const Query = {
  comments(parent, args, { db }, info) {
    return db.comments;
  },
}

export { Query as default };