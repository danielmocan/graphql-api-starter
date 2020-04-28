const { gql } = require("apollo-server");

const userType = gql`
    type User {
        id: ID!,
        firstName: String
        lastName: String
        posts: [Post!]!
        comments: [Comment!]!
    }
    type LoginResponse {
        user: User!,
        token: String!
    }
`;

module.exports = {
    userType,
}