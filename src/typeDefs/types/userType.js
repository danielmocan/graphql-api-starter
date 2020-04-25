const { gql } = require("apollo-server");

const userType = gql`
    type User {
        id: ID!,
        firstName: String
        lastName: String
        posts: [Post!]!
        comments: [Comment!]!
    }
`;

module.exports = {
    userType,
}