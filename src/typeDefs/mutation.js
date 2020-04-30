const { gql } = require("apollo-server");

const mutation = gql`
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
        login(email: String!, password: String!):LoginResponse!
        addPost(title: String!, content: String!): Post!
        addComment(content: String!, postId: String!): Comment!,
    }
`;

module.exports = {
    mutation,
};