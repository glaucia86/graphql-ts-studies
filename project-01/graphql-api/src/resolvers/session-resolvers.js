/**
 * file: src/resolvers/session-resolvers.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/25/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const _ = require('lodash');

module.exports = {
  async speakers(session, args, { dataSources }) {
    const speakers = await dataSources.speakerAPI.getSpeakers();
    const response = speakers.filter((speaker) => {
      return _.filter(session.speakers, { id: speaker.id }).length > 0;
    });

    return response;
  }
};