const jwt = require('jsonwebtoken')

function tokenGenerate(payload) { //
    return jwt.sign(payload, 'SECRET');
}

function verifyToken(token) {
    return jwt.verify(token, 'SECRET');
}
module.exports = {
    tokenGenerate,
    verifyToken
}