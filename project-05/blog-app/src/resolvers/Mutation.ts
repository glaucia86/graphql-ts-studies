/**
 * file: src/resolvers/Mutation.ts
 * description: file responsible for executing all the Mutations
 * of the application.
 * date: 07/10/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Post } from '@prisma/client';
import { Context } from '../index';

interface PostCreateArgs {
  title: string
  content: string
}

interface PostPayloadType {
  userErrors: {
    message: string
  }[],
  post: Post | null
}

export const Mutation = {
  postCreate: async (
    _: any,
    { title, content }: PostCreateArgs,
    { prisma }: Context
    ): Promise<PostPayloadType> => {

      if (!title || !content) {
        return {
          userErrors: [{
            message: 'You must provide title and content fields!'
          }],
          post: null
        }
      }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: 1
      },
    });

    return {
      userErrors: [],
      post
    }
  },
};