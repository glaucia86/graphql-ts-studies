/**
 * file: src/resolvers/Query.ts
 * description: file responsible for executing all 'Queries'
 * in GraphQL
 * date: 07/11/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Context } from './../index';

export const Query = {
  posts: async (_: any, __: any, { prisma }: Context) => {
    const posts = await prisma.post.findMany({
      orderBy: [
        {
          createdAt: "desc"
        },
      ],
    });

    return posts;
  },
};