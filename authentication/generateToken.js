const jwt = require("jsonwebtoken");

function generateToken(username) {
    // expires after half and hour (1800 seconds = 30 minutes)
    return jwt.sign({ data: username }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = generateToken;
