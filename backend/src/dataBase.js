// Connects to the remote Prisma DB
const { Prisma } = require('prisma-binding');

const dataBase = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = dataBase;
