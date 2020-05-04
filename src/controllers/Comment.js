const CommentRepository = require('../repositories/commentRepository.js');
class Comment {
  static async all() {
    return await CommentRepository.getAllComments();
  }

  static async findCommentsByPostId( postId ) {
      return await CommentRepository.findCommentsByPostId( postId );
  }

  static async findCommentsByAuthorId( authorId ) {
    return await CommentRepository.findCommentsByAuthorId( authorId );
  }

  static async findById( commentId ) {
    return await CommentRepository.findPostById( commentId );
  }

  static async createComment( comment ) {
    return await CommentRepository.createComment( comment );
  }
}

module.exports = {
  Comment,
};