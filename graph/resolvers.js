const { AuthenticationError } = require("apollo-server");
const generateToken = require("../authentication/generateToken");

const { data } = require('../seedData/Data');
const { articlesSeed, abstractsSeed } = require('../utilities/buildSeedData')(data);

module.exports = {
    Query: {
       seed: async (_, args, { Abstract, Article }) => {
            // Seed Database with default data

            // remove existing data
            await Article.remove({});
            await Abstract.remove({});
            //
            const createdArticles = await Article.insertMany(articlesSeed);
            for (let i = 0; i < createdArticles.length; i++) {
                const createdArticle = createdArticles[i];
                const { title, filter, day, subtxt, sortIndex } = abstractsSeed[i];
                // because async works in a for loop
                const createdAbstract = new Abstract({
                    title,
                    filter,
                    day,
                    sortIndex,
                    subtxt,
                    articleId: createdArticle._id
                });
                await createdAbstract.save();
            }
            return { txt: 'Successfully seeded database'};
        },
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
