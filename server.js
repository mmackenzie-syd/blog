const http = require('http');
const express = require('express');
const history = require('connect-history-api-fallback');
//
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();
const getUser = require("./authentication/getUser");

const Article = require('./models/Article.js');
const Abstract = require('./models/Abstract.js');

/* Mongoose connection */
const connectDB = async function() {
    const mongoose = require('mongoose');
    const user = process.env.APP_USER;
    const password = process.env.PASSWORD;

    try {
        await mongoose.connect(`mongodb://localhost:27017/blog`, {
            auth:{
                user,
                password
            },
            authSource:"admin",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('database connected');
    } catch (error) {
        console.log(error);
    }
}
connectDB();

const typeDefsString = require('./graph/typeDefsString');
const resolvers = require("./graph/resolvers");

const typeDefs = gql`${typeDefsString}`;

const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        return error;
    },
    context: async ({ req }) => {
        const token = req.headers.authorization || '';
        const user = await getUser(token);
        return {
            Abstract,
            Article,
            user,
        };
    }
});

// Certificate
// Dependencies
const app = express();
app.use(history());
app.use(express.static('www'));

apollo.applyMiddleware({ app });

// Starting both http & https servers
const httpServer = http.createServer(app);

httpServer.listen(4000, () => {
    console.log('HTTP Server running on port 4000');
});
