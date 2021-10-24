const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
require('dotenv').config()

const app = express();
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once('open', () => {
  console.log('connected database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
