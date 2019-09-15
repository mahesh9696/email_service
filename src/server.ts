import * as express from 'express';
const { ApolloServer } = require('apollo-server-express');

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models'

const server: any = new ApolloServer({ typeDefs, resolvers, context: { models } });
const app: any = express();
server.applyMiddleware({ app });
models.sequelize.authenticate();
//models.sequelize.sync();
app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);