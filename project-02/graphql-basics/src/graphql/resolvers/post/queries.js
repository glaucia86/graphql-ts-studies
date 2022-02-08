/* eslint-disable no-unused-vars */
/**
 * file: src/graphql/resolvers/post/queries.js
 * description: file responsible for return all queries related with 'Post'
 * date: 02/05/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const postQueries = {
  posts: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter((post) => {
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

      return isTitleMatch || isBodyMatch;
    });
  },

  post: () => {
    return {
      id: '898ewew',
      title: 'Clean Code',
      body: 'A Handbook of Agile Software Craftsmanshipring',
      published: true
    }
  }
};

export default postQueries;