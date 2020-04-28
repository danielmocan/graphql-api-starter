const { gql } = require("apollo-server");

const mutation = gql`
    type Mutation {
        user(firstName: String!, lastName: String!, email: String!, password: String!): User!
        login(email: String!, password: String!):LoginResponse!
        post(title: String!, content: String!): Post!
        comment(content: String!, postId: String!): Comment!,
    }
`;

module.exports = {
    mutation,
};