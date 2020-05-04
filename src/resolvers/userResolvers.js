const { User } = require('../controllers/User');

const userResolvers = {
  Query: {
    getUsers: () => User.all(),
    getUser: (parent, args) => User.findById(args.id),
  },
  Mutation: {
    async addUser(parent, args) {
      return User.createUser(args.user);
    },
    async login(parent, args) {
      const user = await User.login(args.loginData);
      if (user.error) {
        return user.error;
      }
      return user;
    },
  },
};

module.exports = {
  userResolvers,
};
