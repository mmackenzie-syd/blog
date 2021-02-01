const { AuthenticationError } = require("apollo-server");
const generateToken = require("../authentication/generateToken");

module.exports = {
    Query: {
        getAbstracts: async (_, args, { Abstract }) => {
            return await Abstract.find().sort({sortIndex: -1}).exec();
        },
        getArticle: async (_, { id }, { Article }) => {
            return await Article.findOne({ _id: id }).exec();
        },
        login: async (_, { username, password }) => {
            if (username !== process.env.APP_USER) {
                throw new AuthenticationError('incorrect username');
            }
            if (password !== process.env.PASSWORD) {
                throw new AuthenticationError('incorrect password');
            }
            return { token: generateToken(username), username };
        }
    }
}
