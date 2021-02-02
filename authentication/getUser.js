const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const getUser = async (token) => {
    if (token) {
        try {
            return  await jwt.verify(token, process.env.TOKEN_SECRET);
        } catch (err) {
            throw new AuthenticationError('Your session has ended. Please sign in again')
        }
    }
}
module.exports = getUser;
