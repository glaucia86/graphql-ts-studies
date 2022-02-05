/**
 * file:
 * description: file responsible for the 'User' resolver.
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const userFields = {
  User:  {
    posts: (parent, args, { db }, info) => {
      //==> Relationship btw Post -> User
      return db.posts.filter((post => post.author === parent.id));
    },

    comments: (parent, args, { db }, info) => {
      //==> Relationship btw Comment -> User
      return db.comments.filter((comment => comment.author === parent.id));
    }
  },
};

export default userFields;