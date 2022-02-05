/**
 * file:
 * description:
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { userQueries, userMutations, userFields } from './user';

const resolvers = {
  Query: {
    ...userQueries,
  },

  Mutation: {
    ...userMutations,
  },
  ...userFields,

};

export default resolvers;