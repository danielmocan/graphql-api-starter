const CommentRepository = require('../repositories/commentRepository.js');

class Comment {
  static all() {
    return CommentRepository.getAllComments();
  }

  static findCommentsByPostId(postId) {
    return CommentRepository.findCommentsByPostId(postId);
  }

  static findCommentsByAuthorId(authorId) {
    return CommentRepository.findCommentsByAuthorId(authorId);
  }

  static findById(commentId) {
    return CommentRepository.findPostById(commentId);
  }

  static createComment(comment) {
    return CommentRepository.createComment(comment);
  }
}

module.exports = {
  Comment,
};
