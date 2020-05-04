const mongoose = require("mongoose");
const Comment = mongoose.model('Comment');

const getAllComments = async ( ) => await Comment.find({});

const findCommentsByPostId = async ( postId ) => await Comment.find({ postId });

const findCommentsByAuthorId = async ( authorId ) => await Comment.find({ authorId });

const findPostById = async ( commentId ) => await Comment.findOne({ id: commentId });

const createComment = async ( { content, postId, authorId } ) => {
    const comment = new CommentRepository({ id: uuid(), content, postId, authorId });
    
    return await comment.save();
}

module.exports = {
    getAllComments,
    findCommentsByPostId,
    findCommentsByAuthorId,
    findPostById,
    createComment,
}