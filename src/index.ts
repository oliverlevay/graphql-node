import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const port = process.env.PORT || 9090;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  introspection: true,
});

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
);
