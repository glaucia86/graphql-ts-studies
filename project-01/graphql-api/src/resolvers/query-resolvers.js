/**
 * file: src/resolvers/query-resolvers.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/25/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

module.exports = {
  sessions: (parent, args, { dataSources }) => {
    return dataSources.sessionAPI.getSessions(args);
  },
  sessionById: (parent, { id }, { dataSources }) => {
    try {
      return dataSources.sessionAPI.getSessionById(id);
    } catch (error) {
      return {
        code: 'ERROR',
        message: 'An error occured',
        token: '13423rhrfhefewe',
      };
    }
  },
  speakers: (parent, args, { dataSources }) => {
    return dataSources.speakerAPI.getSpeakers(args);
  },
  speakerById: (parent, { id }, { dataSources }) => {
    return dataSources.speakerAPI.getSpeakerById(id);
  },
};
