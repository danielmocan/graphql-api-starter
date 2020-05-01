const { ApolloServer, gql } = require("apollo-server");
const { getUserFromToken } = require("./helpers/authorisation");
require("./models/mongoose");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req } ) => {
        const token = req.headers.authorization || "";
        const user = getUserFromToken(token);
        return {
            user,
            loggedIn: !!user.id
        }
    },
});

server.listen().then(({ url }) => {
    console.log(` Server Ready at ${url}`)
});