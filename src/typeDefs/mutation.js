const { gql } = require("apollo-server");

const mutation = gql`
    type Mutation {
        addUser(user: UserInput): User
        login(loginData: LoginInput):LoginResponse
        addPost(post: PostInput): Post
        addComment(comment: CommentInput): Comment,
    }

    input UserInput {
        firstName: String!,
        lastName: String!,
        email: String!, 
        password: String!
    }

    input LoginInput {
        email: String,
        password: String,
    }

    input PostInput {
        title: String,
        content: String,
    }

    input CommentInput {
        content: String,
        postId: String,
    }
`;

module.exports = {
    mutation,
};