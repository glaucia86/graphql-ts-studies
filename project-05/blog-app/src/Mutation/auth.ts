/**
 * file: src/resolvers/auth.ts
 * description: file responsible for executing all the
 * auth resolvers.
 * date: 07/25/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Context } from '../index';

interface SignupArgs {
  email: string;
  name: string;
  password: string;
  bio: string;
}

export const authResolvers = {
  signup: async (_: any, { email, name, password, bio }: SignupArgs, { prisma }: Context) => {
    return prisma.user.create({
      data: {
        email,
        name,
        password
      }
    });
  },
}