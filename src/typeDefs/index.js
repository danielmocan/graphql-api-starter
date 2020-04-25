const { query } = require("./query");
const { commentType, postType, userType } = require("./types");

const typeDefs = [ query, commentType, postType, userType];

module.exports = {
    typeDefs
}