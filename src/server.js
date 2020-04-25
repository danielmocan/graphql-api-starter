const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: ( ) => ({ 
        database: () => "bla"
    })
});

server.listen().then(({ url }) => {
    console.log(` Server Ready at ${url}`)
});