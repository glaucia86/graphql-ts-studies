/**
 * file: src/resolvers/Mutation.ts
 * description: file responsible for executing all the Mutations
 * of the application.
 * date: 07/10/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Post, Prisma } from '@prisma/client';
import { Context } from '../index';

interface PostArgs {
  post: {
    title?: string
    content?: string
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
    { post }: PostArgs,
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

  postUpdate: async (_: any, { post, postId }: { postId: string, post: PostArgs["post"] }, { prisma }: Context
  ): Promise<PostPayloadType> => {
    const { title, content } = post;

    if (!title && !content) {
      return {
        userErrors: [
          {
            message: 'You need to update at least one field.'
          }
        ],
        post: null
      }
    }

    const existPost = await prisma.post.findUnique({
      where: {
        id: Number(postId)
      }
    });

    if (!existPost) {
      return {
        userErrors: [
          {
            message: 'Post does not exists!'
          }
        ],
        post: null
      }
    }

    let payloadToUpdate = {
      title,
      content
    }

    if (!title) delete payloadToUpdate.title;
    if (!content) delete payloadToUpdate.content;

    return {
      userErrors: [],
      post: prisma.post.update({
        data: {
          ...payloadToUpdate
        },
        where: {
          id: Number(postId)
        }
      })
    }
  }
};