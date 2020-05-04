const mongoose = require('mongoose');

const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');

const uuid = v4;

const encryptPassword = (password) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

const getAllUsers = async () => User.find({});

const findUserById = async (id) => User.findOne({ id });

const findUserByCommentId = async (commentId) => User.findOne({ comments: { $in: [commentId] } });

const createUser = async ({
  email, password, firstName, lastName,
}) => {
  const encryptedPassword = encryptPassword(password);
  const id = uuid();
  const user = new User({
    email, firstName, lastName, id, password: encryptedPassword,
  });
  return user.save();
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    return false;
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);

  if (!isValidPassword) {
    return false;
  }

  return user;
};

const addPostId = async (postId, authorId) => {
  const user = await User.findOne({ id: authorId });
  const posts = [...user.posts, postId];
  user.posts = posts;
  await user.save();
};

const addCommentId = async (commentId, authorId) => {
  const user = await User.findOne({ id: authorId });
  const comments = [...user.comments, commentId];
  user.comments = comments;
  await user.save();
};

module.exports = {
  getAllUsers,
  findUserById,
  findUserByCommentId,
  createUser,
  login,
  addPostId,
  addCommentId,
};
