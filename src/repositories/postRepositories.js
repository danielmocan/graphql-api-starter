const mongoose = require('mongoose');
const { v4 } = require('uuid');

const uuid = v4;
const Post = mongoose.model('Post');

const getAllPost = async () => Post.find({});

const findPostById = async (id) => Post.findOne({ id });

const findPostByAuthorId = async (authorId) => Post.find({ author: authorId });

const findPostByCommentId = async (commentId) => Post.findOne({ comments: { $in: [commentId] } });

const createPost = async ({ title, content, author }) => {
  const post = new Post({
    id: uuid(), title, content, author,
  });
  await post.save();
  return {
    title: post.title,
    content: post.content,
    author: post.author,
    id: post.id,
    comments: post.comments,
  };
};
const addCommentId = async (commentId, postId) => {
  const post = await Post.findOne({ id: postId });
  console.log( " postId", postId, " post ", post);
  const comments = [...post.comments, commentId];
  post.comments = comments;
  await post.save();
};

module.exports = {
  getAllPost,
  findPostById,
  findPostByCommentId,
  findPostByAuthorId,
  createPost,
  addCommentId,
};
