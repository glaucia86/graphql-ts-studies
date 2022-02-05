/* eslint-disable no-unused-vars */
/**
 * file: src/index.js
 * description: file responsible for connecting to the 'index.js' file
 * date: 01/30/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { GraphQLServer } from 'graphql-yoga';
import db from './data/db';
import Query from './resolvers/query-resolver/Query';
import Mutation from './resolvers/mutation-resolver/Mutation';
// import User from './resolvers/user-resolver/User';
import Post from './resolvers/post-resolver/Post';
import Comment from './resolvers/comment-resolver/Comment';

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    // User,
    Post,
    Comment,
  },
  context: {
    db: db,
  },
});

server.start(() => {
  console.log('Server is now up and running at http://localhost:4000');
});
