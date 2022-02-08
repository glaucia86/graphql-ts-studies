/* eslint-disable no-undef */
/**
 * file: src/graphql/schema.js
 * description: file responsible for joining all the 'typeDefs' and 'resolvers' files.
 * date: 02/05/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';

const gqlFiles = readdirSync(join(__dirname, './typedefs'));

let typeDefs = '';

gqlFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, './typedefs', file), {
    encoding: 'utf-8',
  });
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
