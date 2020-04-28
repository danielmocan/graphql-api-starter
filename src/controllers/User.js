const mongoose = require("mongoose");
const bcrypt = require( "bcrypt" );
const { v4 } =  require('uuid');
const { createToken } = require("../helpers/authorisation");
const uuid = v4;

const encryptPassword = password => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync( password, saltRounds );
  return hash;
};

const UserRepository = mongoose.model('User');

class User {
  static async all() {
    return await UserRepository.find({});
  }

  static async findById( id ) {
      return await UserRepository.findOne({ id });
  }

  static async findByCommentId( commentId ) {
      return await UserRepository.findOne( { comments: { "$in": [ commentId ] } } )
  }

  static async createUser( { email, password, firstName, lastName } ) {
      const encryptedPassword = encryptPassword( password );
      const id = uuid();
      const user = new UserRepository({  email, firstName, lastName, id, password: encryptedPassword });
      return await user.save();
  }
  
  static async login( { email, password } ) {
      const user = await UserRepository.findOne({ email });
      if( !user ) {
          return {
            error: "Something when wrong, please check your details and try again" 
          }
      }

      const isValidPassword = bcrypt.compareSync( password, user.password );

      if( !isValidPassword ) {
          return {
            error:"Something when wrong, please check your details and try again" 
          }
      }

      return {
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          token: createToken({ id: user.id, firstName: user.firstName })
      }
  }
  
  static async addPostId( postId, authorId ) {
    const user = UserRepository.findOne({ id: authorId });
    const posts = [ ...user.posts, postId ];
    user.posts = posts;
    await user.save();
  }
  static async addCommentId( commentId, authorId ) {
    const user = await UserRepository.findOne({ id: authorId });
    console.log("user ", user.comments );
    console.log("commentId", commentId)
    const comments = [ ...user.comments, commentId ];
    user.comments = comments;
    await user.save();
  }
}

module.exports = {
  User,
};