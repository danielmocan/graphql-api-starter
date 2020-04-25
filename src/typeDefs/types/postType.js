const { gql } = require("apollo-server");

const postType = gql`
    type Post {
        id: ID!
        title: String!
        content: String!
        author: User!
        comments: [Comment!]!
    }
`;

module.exports = {
    postType,
}