/**
 * file: src/resolvers/Mutation.ts
 * description: file responsible for executing all the Mutations
 * of the application.
 * date: 07/10/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Post, Prisma } from '@prisma/client';
import { Context } from '../index';

interface PostCreateArgs {
  post: {
    title: string
    content: string
  }
}

interface PostPayloadType {
  userErrors: {
    message: string
  }[],
  post: Post | Prisma.Prisma__PostClient<Post> | null
}

export const Mutation = {
  postCreate: async (
    _: any,
    { post }: PostCreateArgs,
    { prisma }: Context
  ): Promise<PostPayloadType> => {
    const { title, content } = post;
    if (!title || !content) {
      return {
        userErrors: [{
          message: 'You must provide title and content fields!'
        }],
        post: null
      }
    }

    return {
      userErrors: [],
      post: prisma.post.create({
        data: {
          title,
          content,
          authorId: 1
        }
      })
    }
  },
};