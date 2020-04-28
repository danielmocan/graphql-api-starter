const mongoose = require( "mongoose" );

const { Schema } = mongoose;

const commentSchema = new Schema( {
    id: { type: String, required: true, unique: true },
    authorId: { type: String, required: true },
    addedDate: { type: String, default: Date.now() },
    postId: { type: String, required: true },
    content: { type: String, required: true },
} );

module.exports = mongoose.model( "Comment", commentSchema );
