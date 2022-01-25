/* eslint-disable no-unused-vars */
/**
 * file: data-source/session.js
 * description: file responsible for dealing with Apollo data source
 * date: 01/24/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    return session[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    session[0].favorite = !session[0].favorite;
    return session[0];
  }

  addSession(session) {
    session.id = 12;
    sessions.push(session);
    return session;
  }
}

module.exports = SessionAPI;
