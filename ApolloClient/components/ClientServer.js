import { ApolloClient, InMemoryCache } from '@apollo/client';

const ClientServer = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export default ClientServer
