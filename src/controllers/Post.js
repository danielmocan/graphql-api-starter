const PostRepository = require('../repositories/postRepositories');
class Post {
  static async all() {
    return await PostRepository.getAllPost();
  }

  static async findById( id ) {
    return await PostRepository.findPostById(id);
  }

  static async findByAuthor( authorId ) {
    return await PostRepository.findPostByAuthorId(authorId);
  }

  static async findByCommentId( commentId ) {
    return await PostRepository.findPostByCommentId( commentId );
  }

  static async createPost( post ) {
    return  await PostRepository(post);
  }

  static async addCommentId( commentId, postId ) {
    PostRepository.addCommentId( commentId, postId );
  }

}

module.exports = {
  Post,
};