// eslint-disable-next-line
require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';

import { connectDatabase } from './database';
import { typeDefs, resolvers } from './graphql';

const mount = async (app: Application): Promise<void> => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  server.applyMiddleware({ app, path: '/api' });

  app.listen(process.env.PORT);

  console.log(`[app]: http://localhost:${process.env.PORT}/api`);
};

mount(express());
