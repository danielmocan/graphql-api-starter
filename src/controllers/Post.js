const mongoose = require("mongoose");
const { v4 } =  require('uuid');
const uuid = v4;

const PostRepository = mongoose.model('Post');

class Post {
  static async all() {
    return await PostRepository.find({});
  }

  static async findById( id ) {
      return await PostRepository.findOne({id});
  }

  static async findByAuthor( authorId ) {
      return await PostRepository.findOne({ authorId });
  }

  static async findByCommentId( commentId ) {
    return await PostRepository.findOne( { comments: { "$in": [ commentId ] } } )
  }

  static async createPost( { title, content, author } ) {
    const post = new PostRepository({ id: uuid(), title, content, author });
    await post.save();
    return {
      title: post.title,
      content: post.content,
      author: post.author,
      id: post.id,
      comments: post.comments,
    }
  }

  static async addCommentId( commentId, postId ) {
    const post = await PostRepository.findOne({ id: postId });
    const comments = [ ...post.comments, commentId ];
    post.comments = comments;
    await post.save();
  }

}

module.exports = {
  Post,
};