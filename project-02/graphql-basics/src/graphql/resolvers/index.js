/**
 * file:
 * description:
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { userQueries, userMutations, userFields } from './user';
import { postQueries, postMutations, postFields } from './post';

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
  },

  Mutation: {
    ...userMutations,
    ...postMutations,
  },
  ...userFields,
  ...postFields,
};

export default resolvers;