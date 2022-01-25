/**
 * file: src/resolvers/mutation-resolvers.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/23/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }) => {
    return dataSources.sessionAPI.toggleFavoriteSession(id);
  },
};