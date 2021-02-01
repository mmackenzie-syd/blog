const { AuthenticationError } = require("apollo-server");
const generateToken = require("../authentication/generateToken");
const calculateSortIndex = require("../utilities/calculateSortIndex");

const { data } = require('../seedData/Data');
const { articlesSeed, abstractsSeed } = require('../utilities/buildSeedData')(data);

module.exports = {
    Query: {
        seed: async (_, args, {Abstract, Article}) => {
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
    },
    Mutation: {
        createBlog: async (_, { title, filter, day, subtxt, fulltxt }, { Article, Abstract }) => {
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
            { Article, Abstract }) => {
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
        deleteBlog: async (_, { abstractId, articleId  }, { Abstract, Article }) => {
            await Article.deleteOne({ _id: articleId });
            await Abstract.deleteOne({ _id: abstractId });
            return {txt: 'Successfully deleted blog'};
        },
    }
}


// todo

// <--- MAIL CONTACT INFO TO ME --->
/*
router.post('/contact', function (req, res) {
    var data = req.body;
    /*  var transporter = nodemailer.createTransport({ // Old method
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'snapdragonxc@gmail.com',
              pass: 'XXXXXXX'
          }
      }); */ /*
    var transporter = nodemailer.createTransport({ // use 0Auth2
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'snapdragonxc@gmail.com',
            clientId: config.mail.clientId,
            clientSecret: config.mail.clientSecret,
            refreshToken: config.mail.refreshToken,
            accessToken: config.mail.accessToken,
            expires: 1484314697598
        }
    });
    transporter.sendMail({  //email options
        from: "Sender Name",
        to: "snapdragonxc@gmail.com", // receiver
        subject: "Blog Msg: " + data.subject, // subject
        html: data.msg + ' from: ' + data.from,
    }, function(error, response){  //callback
        if(error) {
            console.log(error);
            return res.send(500, err);
        }else{
            console.log("Message sent: " + response.message);
            res.json(req.body);
        }
        transporter.close();
    });
});
*/



