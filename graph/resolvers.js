const { AuthenticationError } = require("apollo-server");
const generateToken = require("../authentication/generateToken");
const calculateSortIndex = require("../utilities/calculateSortIndex");
const nodemailer = require('nodemailer');

const { data } = require('../seedData/Data');
const { articlesSeed, abstractsSeed } = require('../utilities/buildSeedData')(data);

module.exports = {
    Query: {
        seed: async (_, args, {Abstract, Article, user}) => {
            if (!user) return null;
            // Seed Database with default data

            // remove existing data
            await Article.remove({});
            await Abstract.remove({});
            //
            const createdArticles = await Article.insertMany(articlesSeed);
            for (let i = 0; i < createdArticles.length; i++) {
                const createdArticle = createdArticles[i];
                const {title, filter, day, subtxt, sortIndex} = abstractsSeed[i];
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
            return {txt: 'Successfully seeded database'};
        },
        getAbstracts: async (_, args, {Abstract}) => {
            return await Abstract.find().sort({sortIndex: -1}).exec();
        },
        getArticle: async (_, {id}, {Article}) => {
            return await Article.findOne({_id: id}).exec();
        },
        login: async (_, {username, password}) => {
            if (username !== process.env.APP_USER) {
                throw new AuthenticationError('incorrect username');
            }
            if (password !== process.env.PASSWORD) {
                throw new AuthenticationError('incorrect password');
            }
            return {token: generateToken(username), username};
        },
        contactMe: async (_, { email, subject, message }) => {
            console.log('email contact: ', email, subject, message)
            // This is currently disabled in this app
            // If you would like to use this feature, re-enable and
            // use mailgun or other provider instead of gmail
            // const transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: '',
            //         pass: ''
            //     }
            // });
            //
            // const mailOptions = {
            //     from: '',
            //     to: '',
            //     subject: subject,
            //     text: message
            // };
            //
            // transporter.sendMail(mailOptions, function(error, info){
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         console.log('Email sent: ' + info.response);
            //     }
            // });
            return { txt: 'Successfully received contact' };
        },
    },
    Mutation: {
        createBlog: async (_, { title, filter, day, subtxt, fulltxt }, { Article, Abstract, user }) => {
            if (!user) return null;
            const sortIndex = calculateSortIndex(filter, day);
            // save new article
            const createdArticle = new Article({ fulltxt });
            await createdArticle.save();
            // save new abstract
            const createdAbstract = new Abstract({
                title, filter, day, subtxt, sortIndex,
                articleId: createdArticle._id
            });
            await createdAbstract.save();
            return {txt: 'Successfully created blog'};
        },
        updateBlog: async (_, { title, filter, day, subtxt, fulltxt, abstractId, articleId },
            { Article, Abstract, user }) => {
                if (!user) return null;
                const sortIndex = calculateSortIndex(filter, day);

                // delete existing article and abstract
                await Article.deleteOne({_id: articleId});
                await Abstract.deleteOne({_id: abstractId});

                // save new article
                const createdArticle = new Article({fulltxt});
                await createdArticle.save();

                // save new abstract
                const createdAbstract = new Abstract({
                    title, filter, day, subtxt, sortIndex,
                    articleId: createdArticle._id
                });
                await createdAbstract.save();
                return {txt: 'Successfully updated blog'};
        },
        deleteBlog: async (_, { abstractId, articleId  }, { Abstract, Article, user }) => {
            if (!user) return null;
            await Article.deleteOne({ _id: articleId });
            await Abstract.deleteOne({ _id: abstractId });
            return {txt: 'Successfully deleted blog'};
        },
    }
}
