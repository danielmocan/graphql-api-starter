const { gql } = require("apollo-server");

const commentType = gql`
    type Comment {
        id: ID!
        content: String!
        author: User!
        post: Post!
    }
`;

module.exports = {
    commentType,
}