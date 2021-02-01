module.exports = `
    type Abstract {
        _id: ID
        title: String!
        filter: String,  
        day: String,
        sortIndex: Int, 
        subtxt: String,
        articleId: ID
    }
    type Article {
        _id: ID
        fulltxt: String
    }
    type User {
        token: String
        username: String
    }
    type Message {
        txt: String
    }
    type Query {
        seed: Message
        getAbstracts: [Abstract]
        getArticle(id: ID): Article
        login(username: String, password: String): User
    }
    type Mutation {
        createBlog(title: String, filter: String, day, subtxt: String, fulltxt: String ): Message
        updateBlog(title: String, filter: String, day, subtxt: String, fulltxt: String, abstractId: ID, articleId: ID ): Message
        deleteBlog(abstractId: ID, articleId: ID ): Message
    }
`

