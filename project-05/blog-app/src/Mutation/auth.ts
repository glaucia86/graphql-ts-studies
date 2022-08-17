/**
 * file: src/resolvers/auth.ts
 * description: file responsible for executing all the
 * auth resolvers.
 * date: 07/25/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Context } from '../index';
import validator from 'validator';


interface SignupArgs {
  email: string;
  name: string;
  password: string;
  bio: string;
}

interface UserPayload {
  userErrors: {
    message: string;
  }[];
  user: null
}

export const authResolvers = {
  signup: async (
    _: any,
    { email, name, password, bio }: SignupArgs,
    { prisma }: Context
  ): Promise<UserPayload> => {

    const emailIsValid = validator.isEmail(email);

    if (!emailIsValid) {
      return {
        userErrors: [{
          message: 'You must provide a valid email!'
        }],
        user: null
      }
    }

    const passwordIsValid = validator.isLength(password, {
      min: 5
    });

    if (!passwordIsValid) {
      return {
        userErrors: [{
          message: 'The passawrd must be at least 5 characters long!'
        }],
        user: null
      }
    }

    return {
      userErrors: [],
      user: null
    }

    /*return prisma.user.create({
      data: {
        email,
        name,
        password
      }
    });*/
  },
}