/**
 * file:
 * description:
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { userQueries, userMutations, userFields } from './user';
import { postQueries, postMutations, postFields } from './post';
import { commentQueries, commentMutations, commentFields } from './comment';

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
    ...commentQueries,
  },

  Mutation: {
    ...userMutations,
    ...postMutations,
    ...commentMutations,
  },
  ...userFields,
  ...postFields,
  ...commentFields,
};

export default resolvers;