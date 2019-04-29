// React imports
import React from 'react';
// Apollo & GraphQL imports
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// Query example
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
    }
  }
`;

const Home = () => {
  return (
    <div>
      <h2>React Boilerplate</h2>
      
      <Query query={ALL_ITEMS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <div>
              {data.items.map(item => (
                <p>{item.title}</p>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Home;
