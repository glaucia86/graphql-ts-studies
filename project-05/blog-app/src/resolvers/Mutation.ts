/**
 * file: src/resolvers/Mutation.ts
 * description: file responsible for executing all the Mutations
 * of the application.
 * date: 07/10/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Context } from '../index';

interface PostCreateArgs {
  title: string
  content: string
}

export const Mutation = {
  postCreate: async (_: any, { title, content }: PostCreateArgs, { prisma }: Context) => {
    prisma.post.create({
      data: {
        title,
        content,
        authorId: 1
      }
    })
  },
};