/**
 * file: src/resolvers/Mutation.ts
 * description: file responsible for executing all the Mutations
 * of the application.
 * date: 07/10/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { postResolvers } from './post';
import { authResolvers } from './auth';

export const Mutation = {
  ...postResolvers,
  ...authResolvers
};