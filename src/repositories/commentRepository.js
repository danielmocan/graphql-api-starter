const mongoose = require('mongoose');
const { v4 } = require('uuid');

const uuid = v4;

const Comment = mongoose.model('Comment');

const getAllComments = async () => Comment.find({});

const findCommentsByPostId = async (postId) => Comment.find({ postId });

const findCommentsByAuthorId = async (authorId) => Comment.find({ authorId });

const findPostById = async (commentId) => Comment.findOne({ id: commentId });

const createComment = async ({ content, postId, authorId }) => {
  const comment = new Comment({
    id: uuid(), content, postId, authorId,
  });

  return comment.save();
};

module.exports = {
  getAllComments,
  findCommentsByPostId,
  findCommentsByAuthorId,
  findPostById,
  createComment,
};
