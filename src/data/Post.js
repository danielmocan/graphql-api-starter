const mongoose = require( "mongoose" );

const { Schema } = mongoose;

const postSchema = new Schema( {
    id: { type: String, required: true, unique: true },
    authorId: { type: String, required: true },
    addedDate: { type: String, default: Date.now() },
    comments: { type: Array },
} );

module.exports = mongoose.model( "Post", postSchema );