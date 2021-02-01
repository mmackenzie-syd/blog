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
`
