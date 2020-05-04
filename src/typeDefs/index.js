const { query } = require('./query');
const { mutation } = require('./mutation');
const { commentType, postType, userType } = require('./types');

const typeDefs = [query, mutation, commentType, postType, userType];

module.exports = {
  typeDefs,
};
