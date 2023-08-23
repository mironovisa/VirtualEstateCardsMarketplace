const bcrypt = require('bcrypt');
const saltRounds = 10;


const generatePasswordService = (password, callback) => {

    bcrypt.hash(password, saltRounds, function (err, hash) {
        callback(hash)
    });
}

module.exports = {
    generatePasswordService
}