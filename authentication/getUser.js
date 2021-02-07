const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const getUser = async (token) => {
    if (token) {
        const user = await jwt.verify(token, process.env.TOKEN_SECRET);
        return user;
    } else {
        return '';
    }
}
module.exports = getUser;
