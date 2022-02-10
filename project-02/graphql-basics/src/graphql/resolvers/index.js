/**
 * file: src/graphql/resolvers/index.js
 * description: file responsible for execute all the resolvers in the application.
 * date: 02/09/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { userQueries, userMutations, userFields } from './user';
import { postQueries, postMutations, postFields, postSubscriptions } from './post';
import { commentQueries, commentMutations, commentFields, commentSubscriptions } from './comment';

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
    ...commentQueries
  },

  Mutation: {
    ...userMutations,
    ...postMutations,
    ...commentMutations
  },

  Subscription: {
    ...commentSubscriptions,
    ...postSubscriptions
  },

  ...userFields,
  ...postFields,
  ...commentFields
};

export default resolvers;