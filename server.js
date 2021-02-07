const { ApolloServer, gql } = require("apollo-server");
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

const server = new ApolloServer({
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

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});
