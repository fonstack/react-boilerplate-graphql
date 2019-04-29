// Apollo imports
import ApolloClient from 'apollo-boost';
// Others imports
import { endpoint } from './config';

function createClient() {
  return new ApolloClient({
    uri: endpoint
  });
}

export default createClient;
