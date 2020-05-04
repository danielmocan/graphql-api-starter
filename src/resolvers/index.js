const { userResolvers } = require('./userResolvers');
const { postResolvers } = require('./postResolvers');
const { commentResolvers } = require('./commentResolvers');

const resolvers = [userResolvers, postResolvers, commentResolvers];

module.exports = {
  resolvers,
};
