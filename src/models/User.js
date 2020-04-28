const mongoose = require( "mongoose" );

const { Schema } = mongoose;

const userSchema = new Schema( {
    id: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    registrationDate: { type: String, default: Date.now() },
    password: {type: String, required: true},
    comments: { type: Array },
    posts: { type: Array },
} );

module.exports = mongoose.model( "User", userSchema );