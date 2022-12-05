import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:9001/graphql';

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
