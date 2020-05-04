const { gql } = require('apollo-server');

const query = gql`
    type Query {
        getUsers: [User]!,
        getUser(id: ID!): User,
        getPosts: [Post]!,
        getPost(id: ID!): Post,
        getComments:[Comment]!,
        getComment(id: ID!): Comment,
    }
`;

module.exports = {
  query,
};
