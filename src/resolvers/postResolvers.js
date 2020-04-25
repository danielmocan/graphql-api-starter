const { Post } = require("../models/Post");
const { User } = require("../models/User");
const { Comment } = require("../models/Comment");

const postResolvers = {
    Query: {
        posts: () => Post.all(),
        post: (parent, args, context, info) =>  {
            console.log( "context ", parent );
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
        author(comment) {
            return User.findByCommentId( comment.id )
        },
        post(comment) {
            return Post.findByCommentId( comment.id )
        }
    }
}

module.exports = {
    postResolvers
}