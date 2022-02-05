/* eslint-disable no-unused-vars */
/**
 * file: src/resolvers/query-resolver/Query.js
 * description: file responsible for the 'Query' resolver.
 * date: 02/04/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const Query = {


  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter((post) => {
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

      return isTitleMatch || isBodyMatch;
    });
  },

  comments(parent, args, { db }, info) {
    return db.comments;
  },

  post() {
    return {
      id: '898ewew',
      title: 'Clean Code',
      body: 'A Handbook of Agile Software Craftsmanshipring',
      published: true
    }
  }
}

export { Query as default };