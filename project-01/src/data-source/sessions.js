/* eslint-disable no-unused-vars */
/**
 * file: data-source/session.js
 * description: file responsible for dealing with Apollo data source
 * date: 01/24/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {

  }

  getSessions() {
    return sessions;
  }
}

module.exports = SessionAPI;