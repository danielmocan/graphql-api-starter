const { Post } = require('../controllers/Post');
const { User } = require('../controllers/User');
const { Comment } = require('../controllers/Comment');

const commentResolvers = {
  Query: {
    getComments: () => Comment.all(),
    getComment: (parent, args) => Comment.findById(args.id),
  },
  Mutation: {
    async addComment(parent, args, context) {
      if (!context.loggedIn) {
        return null;
      }
      // console.log('context', context.user);
      const comment = await Comment.createComment({ ...args.comment, authorId: context.user.id });
      await User.addCommentId(comment.id, context.user.id);
      await Post.addCommentId(comment.id, args.comment.postId);
      return comment;
    },
  },
};

module.exports = {
  commentResolvers,
};
