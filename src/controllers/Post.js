const PostRepository = require('../repositories/postRepositories');

class Post {
  static all() {
    return PostRepository.getAllPost();
  }

  static findById(id) {
    return PostRepository.findPostById(id);
  }

  static findByAuthor(authorId) {
    return PostRepository.findPostByAuthorId(authorId);
  }

  static findByCommentId(commentId) {
    return PostRepository.findPostByCommentId(commentId);
  }

  static createPost(post) {
    return PostRepository(post);
  }

  static addCommentId(commentId, postId) {
    PostRepository.addCommentId(commentId, postId);
  }
}

module.exports = {
  Post,
};
