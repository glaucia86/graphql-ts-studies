/**
 * file: src/resolvers/resolvers.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/23/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const Query = require('./query-resolvers');
const Session = require('./session-resolvers');

module.exports = {
  Query,
  Session,
};
