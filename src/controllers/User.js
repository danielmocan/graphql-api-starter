const { createToken } = require("../helpers/authorisation");
const UserRepository = require("../repositories/userRepository");

class User {
  static async all() {
    return await UserRepository.getAllUsers();
  }

  static async findById( id ) {
      return await UserRepository.findUserById( id );
  }

  static async findByCommentId( commentId ) {
      return await UserRepository.findUserByCommentId( commentId );
  }

  static async createUser( user ) {
      return await UserRepository.createUser( user );
  }
  
  static async login( { email, password } ) {
      const user = await UserRepository.login( email, password );
      if( !user ) {
          return {
            error: "Something when wrong, please check your details and try again" 
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
    UserRepository.addPostId(postId, authorId);
  }
  static async addCommentId( commentId, authorId ) {
    UserRepository.addCommentId(commentId, authorId);
  }
}

module.exports = {
  User,
};