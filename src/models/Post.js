const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  id: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  title: { type: String, requred: true },
  content: { type: String, required: true },
  addedDate: { type: String, default: Date.now() },
  comments: { type: Array, default: [] },
});

module.exports = mongoose.model('Post', postSchema);
