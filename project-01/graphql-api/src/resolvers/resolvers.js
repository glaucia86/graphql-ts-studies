/**
 * file: src/resolvers/resolvers.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/23/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

module.exports = {
  sessions: (parent, args, { dataSources }) => {
    return dataSources.sessionAPI.getSessions(args);
  },
  sessionById: (parent, { id }, { dataSources }) => {
    return dataSources.sessionAPI.getSessionById(id);
  },
  speakers: (parent, args, { dataSources }) => {
    return dataSources.speakerAPI.getSpeakers();
  },
  speakerById: (parent, { id }, { dataSources }) => {
    return dataSources.speakerAPI.getSpeakerById(id);
  },
};
