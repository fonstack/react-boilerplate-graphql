// GraphQL imports
const { GraphQLServer } = require('graphql-yoga');
// Other imports
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const dataBase = require('./dataBase');

// Create the GrapQL Yoga Server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, dataBase }),
  });
}

module.exports = createServer;
