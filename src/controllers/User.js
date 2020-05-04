const { createToken } = require('../helpers/authorisation');
const UserRepository = require('../repositories/userRepository');

class User {
  static all() {
    return UserRepository.getAllUsers();
  }

  static findById(id) {
    return UserRepository.findUserById(id);
  }

  static findByCommentId(commentId) {
    return UserRepository.findUserByCommentId(commentId);
  }

  static createUser(user) {
    return UserRepository.createUser(user);
  }

  static async login({ email, password }) {
    const user = await UserRepository.login(email, password);
    if (!user) {
      return {
        error: 'Something when wrong, please check your details and try again',
      };
    }

    return {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token: createToken({ id: user.id, firstName: user.firstName }),
    };
  }

  static async addPostId(postId, authorId) {
    UserRepository.addPostId(postId, authorId);
  }

  static async addCommentId(commentId, authorId) {
    UserRepository.addCommentId(commentId, authorId);
  }
}

module.exports = {
  User,
};
