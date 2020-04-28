const { gql } = require("apollo-server");

const commentType = gql`
    type Comment {
        id: ID!
        content: String!
        authorId: User!
        post: Post!
    }
`;

module.exports = {
    commentType,
}