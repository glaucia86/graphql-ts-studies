/* eslint-disable no-unused-vars */
/**
 * file: src/graphql/resolvers/comment/subscriptions.js
 * description: file responsible for dealing with Subscription on type 'Comment'
 * date: 02/09/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const commentSubscriptions = {
    count: {
      subscribe: (parent, args, { pubsub }, info) => {
        let count = 0;

        setInterval(() => {
          count++;
          pubsub.publish('count', {
            count
          })
        },  1000);

        return pubsub.asyncIterator('count');
      }
    },

    comment: {
      subscribe: (parent, { postId }, { db, pubsub }, info) => {
        const post = db.posts.find((post) => post.id === postId && post.published);

        if (!post) {
          throw new Error('Post not found!');
        }

        return pubsub.asyncIterator(`comment ${postId}`);
      }
    }
};

export default commentSubscriptions;