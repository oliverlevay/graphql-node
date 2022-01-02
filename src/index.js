const { ApolloServer } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const port = process.env.PORT || 9090;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
);
