/**
 * file: src/resolvers/resolvers.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/23/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const Query = require('./query-resolvers');
const Session = require('./session-resolvers');
const Mutation = require('./mutation-resolvers');

module.exports = {
  Query,
  Session,
  Mutation,
  SessionOrError: {
    __resolveType(obj){
      if (obj.code) {
        return 'Error'
      }
      return 'Session'
    }
  }
};
