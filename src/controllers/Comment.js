const mongoose = require("mongoose");
const { v4 } =  require('uuid');
const uuid = v4;

const CommentRepository = mongoose.model('Comment');

class Comment {
  static async all() {
    return await CommentRepository.find({})
  }

  static async findCommentsByPostId( postId ) {
      const comments = await CommentRepository.find({ postId });
      return comments;
  }

  static async findCommentsByAuthorId( authorId ) {
    const comments = await CommentRepository.find({ authorId });
    return comments;
  }

  static async findById( commentId ) {
    const comments = await CommentRepository.findOne({ id: commentId });
      return comments;
  }

  static async createComment( { content, postId, authorId } ) {
    const comment = new CommentRepository({ id: uuid(), content, postId, authorId });
    
    return await comment.save();
  }
}

module.exports = {
  Comment,
};