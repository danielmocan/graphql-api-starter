const { gql } = require("apollo-server");

const query = gql`
    type Query {
        users: [User]!,
        user(id: ID!): User,
        posts: [Post]!,
        post(id: ID!): Post,
        comments:[Comment]!,
        comment(id: ID!): Comment,
    }
`;

module.exports = {
    query,
};