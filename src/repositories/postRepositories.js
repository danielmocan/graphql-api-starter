const mongoose = require("mongoose");
const { v4 } =  require('uuid');
const uuid = v4;
const Post = mongoose.model('Post');

const getAllPost = async ( ) => await Post.find({});

const findPostById = async ( id ) => await Post.findOne({ id });

const findPostByAuthorId = async ( authorId  ) => await Post.find({ author: authorId });

const findPostByCommentId = async ( commentId ) => await PostRepository.findOne( { comments: { "$in": [ commentId ] } } );

const createPost = async ( { title, content, author } ) => {
    const post = new PostRepository({ id: uuid(), title, content, author });
    await post.save();
    return {
      title: post.title,
      content: post.content,
      author: post.author,
      id: post.id,
      comments: post.comments,
    }
};
const addCommentId = async ( commentId, postId ) => {
  const post = await PostRepository.findOne({ id: postId });
    const comments = [ ...post.comments, commentId ];
    post.comments = comments;
    await post.save();
}

module.exports = {
    getAllPost,
    findPostById,
    findPostByCommentId,
    findPostByAuthorId,
    createPost,
    addCommentId,
}