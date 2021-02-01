const { ApolloServer, AuthenticationError, gql } = require("apollo-server");
require("dotenv").config();

const Article = require('./models/Article.js');
const Abstract = require('./models/Abstract.js');

/* Mongoose connection */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connected');
});

const typeDefsString = require('./graph/typeDefsString');
const resolvers = require("./graph/resolvers");

const typeDefs = gql`${typeDefsString}`;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        return error;
    },
    context: async ({ req }) => {
        return {
            Abstract,
            Article
        };
    }
});

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});
