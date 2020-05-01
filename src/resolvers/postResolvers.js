const { Post } = require("../controllers/Post");
const { User } = require("../controllers/User");
const { Comment } = require("../controllers/Comment");

const postResolvers = {
    Query: {
        getPosts: () => Post.all(),
        getPost: (parent, args, context, info) =>  {
            return Post.findById( args.id )
        }
    },
    Post: {
        author(post) {
            return User.findById(post.author)
        },
        comments(post) {
            return Comment.findCommentsByPostId(post.id)
        }
    },
    User: {
        posts(user) {
            return Post.findByAuthor(user.id)
        }
    },
    Comment: {
        async authorId(comment) {
            return await User.findByCommentId( comment.id )
        },
        async post(comment) {
            const post = await Post.findByCommentId( comment.id );
            return post;
        }
    },

    Mutation: { 
        async addPost( parent, args, context, info) {
            const post = await Post.createPost({ ...args.post, author: context.user.id });
            await User.addPostId(post.id);
            return post;
        }
    }
}

module.exports = {
    postResolvers
}