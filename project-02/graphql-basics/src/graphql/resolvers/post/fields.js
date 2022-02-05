/**
 * file: src/graphql/resolvers/post/fields.js
 * description: file responsible for the 'Post' resolver.
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const postFields = {
  Post: {
    author: (parent, args, { db }, info) => {
      //==> Relationship btw User -> Post
      return db.users.find((user => user.id === parent.author));
    },

    comments: (parent, args, { db }, info) => {
      //==> Relationship btw Comment -> Post
      return db.comments.filter((comment => comment.post === parent.id));
    }
  },
};

export default postFields;