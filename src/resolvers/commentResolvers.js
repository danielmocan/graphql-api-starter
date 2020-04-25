const { Post } = require("../models/Post");
const { User } = require("../models/User");
const { Comment } = require("../models/Comment");

const commentResolvers = {
    Query: {
        comments: () => Comment.all(),
        comment: (parent, args, context, info) =>  {
            console.log( "context ", parent );
            return Comment.findById( args.id )
        }
    },
    
}

module.exports = {
    commentResolvers
}