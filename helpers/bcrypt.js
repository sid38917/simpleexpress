const bcrypt = require('bcryptjs')


//obtained through online sources
function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10); 
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

function verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash); //check password, returns true or false 
}

module.exports = {
    hashPassword,
    verifyPassword
}

