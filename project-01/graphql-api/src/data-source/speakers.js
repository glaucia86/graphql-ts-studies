/**
 * file: data-source/speakers.js
 * description: file responsible for dealing with Apollo data source
 * date: 01/25/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const { RESTDataSource } = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/speakers';
  }

  async getSpeakerById(id) {
    const data = await this.get(`/${id}`);
    return data;
  }

  async getSpeakers() {
    const data = await this.get('/');
    return data;
  }
}

module.exports = SpeakerAPI;