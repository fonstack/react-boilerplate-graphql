// React imports
import React, { Component } from 'react';
// Apollo imports
import { ApolloProvider } from 'react-apollo';
import createClient from './lib/createClient';
// Components & Pages
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={createClient()}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
