/* eslint-disable no-undef */
/**
 * file: config/environment/index.js
 * description: file responsible for handling the application's environment variables.
 * date: 02/07/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

export { port, env };